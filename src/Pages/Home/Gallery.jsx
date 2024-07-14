import React, { useRef, useState, useEffect } from 'react';

export default function Gallery() {
    const galleryRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(null);
    const [imageWidth, setImageWidth] = useState(0);
    const [scrollSpeed, setScrollSpeed] = useState(2);

    useEffect(() => {
        const handleAutoScroll = () => {
            if (!isDown) {
                galleryRef.current.scrollLeft += scrollSpeed;
                if (galleryRef.current.scrollLeft >= galleryRef.current.scrollWidth / 2) {
                    galleryRef.current.scrollLeft = 0;
                }
            }
        };

        const interval = setInterval(handleAutoScroll, 50);

        return () => clearInterval(interval);
    }, [isDown, scrollSpeed]);

    const handlePointerDown = (e) => {
        e.preventDefault();
        setIsDown(true);
        setStartX(
            e.type === 'mousedown' ? e.pageX - galleryRef.current.offsetLeft : e.touches[0].pageX - galleryRef.current.offsetLeft
        );
        setScrollLeft(galleryRef.current.scrollLeft);
        galleryRef.current.style.cursor = 'grabbing';
    };

    const handlePointerLeave = () => {
        setIsDown(false);
        galleryRef.current.style.cursor = 'grab';
    };

    const handlePointerUp = () => {
        setIsDown(false);
        galleryRef.current.style.cursor = 'grab';
    };

    const handlePointerMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x =
            e.type === 'mousemove' ? e.pageX - galleryRef.current.offsetLeft : e.touches[0].pageX - galleryRef.current.offsetLeft;
        const walk = (x - startX) * 3; // Adjust scrolling speed here
        galleryRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleAnimationEnd = () => {
        if (!isDown) {
            galleryRef.current.style.cursor = 'pointer';
        }
    };

    const handleGalleryScroll = () => {
        if (galleryRef.current.scrollLeft + galleryRef.current.clientWidth >= galleryRef.current.scrollWidth) {
            galleryRef.current.scrollLeft = 0;
        }
    };

    const handleImageLoad = () => {
        setImageWidth(galleryRef.current.children[0].children[0].offsetWidth);
    };

    return (
        <section className="logos-section" id="gallery">
            <div className="title-container">
                <h2 className="title">Gallery</h2>
            </div>
            <div
                className="logos"
                ref={galleryRef}
                onMouseDown={handlePointerDown}
                onMouseLeave={handlePointerLeave}
                onMouseUp={handlePointerUp}
                onMouseMove={handlePointerMove}
                onTouchStart={handlePointerDown}
                onTouchMove={handlePointerMove}
                onTouchEnd={handlePointerUp}
                onAnimationEnd={handleAnimationEnd}
                onScroll={handleGalleryScroll}
            >
                <div className="logos-slide">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
                        <img
                            key={index}
                            src={`./img/gallery-img-${index}.jpg`}
                            alt={`gallery image ${index}`}
                            onLoad={handleImageLoad}
                        />
                    ))}
                </div>
                <div className="logos-slide">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
                        <img
                            key={index + 8}
                            src={`./img/gallery-img-${index}.jpg`}
                            alt={`gallery image ${index}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}