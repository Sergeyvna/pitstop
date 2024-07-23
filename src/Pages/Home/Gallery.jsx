import React, { useRef, useState, useEffect } from 'react';

export default function Gallery() {
    const galleryRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(null);

    useEffect(() => {
        const gallery = galleryRef.current;
        const scrollSpeed = 2;

        const handleAutoScroll = () => {
            if (!isDown) {
                gallery.scrollLeft += scrollSpeed;
                if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
                    gallery.scrollLeft = 0;
                }
            }
        };

        const interval = setInterval(handleAutoScroll, 20);

        return () => clearInterval(interval);
    }, [isDown]);

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
        const walk = (x - startX) * 3;
        galleryRef.current.scrollLeft = scrollLeft - walk;
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
            >
                <div className="logos-slide">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
                        <img
                            key={index}
                            src={`./img/gallery-img-${index}.jpg`}
                            alt={`gallery image ${index}`}
                        />
                    ))}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
                        <img
                            key={index + 11}
                            src={`./img/gallery-img-${index}.jpg`}
                            alt={`gallery image ${index}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}