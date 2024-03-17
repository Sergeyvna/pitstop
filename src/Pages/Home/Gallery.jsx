import React, { useRef, useState } from 'react';

export default function Gallery() {
    const galleryRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(null);
    const [imageWidth, setImageWidth] = useState(0);

    // Function to handle mouse/touch down event
    const handlePointerDown = (e) => {
        e.preventDefault();
        setIsDown(true);
        setStartX(e.type === 'mousedown' ? e.pageX - galleryRef.current.offsetLeft : e.touches[0].pageX - galleryRef.current.offsetLeft);
        setScrollLeft(galleryRef.current.scrollLeft);
        galleryRef.current.style.cursor = 'grabbing';
    };

    // Function to handle mouse/touch leave event
    const handlePointerLeave = () => {
        setIsDown(false);
        galleryRef.current.style.cursor = 'grab';
    };

    // Function to handle mouse/touch up event
    const handlePointerUp = () => {
        setIsDown(false);
        galleryRef.current.style.cursor = 'grab';
    };

    // Function to handle mouse/touch move event
    const handlePointerMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.type === 'mousemove' ? e.pageX - galleryRef.current.offsetLeft : e.touches[0].pageX - galleryRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed here
        galleryRef.current.scrollLeft = scrollLeft - walk;
    };

    // Function to handle animation end event
    const handleAnimationEnd = () => {
        if (!isDown) {
            galleryRef.current.style.cursor = 'pointer';
        }
    };

    // Function to handle gallery scroll event
    const handleGalleryScroll = () => {
        if (galleryRef.current.scrollLeft + galleryRef.current.clientWidth >= galleryRef.current.scrollWidth) {
            // If scrolled to the end, reset scroll position to create infinite loop effect
            galleryRef.current.scrollLeft = 0;
        }
    };

    // Function to handle image load event
    const handleImageLoad = () => {
        // Update imageWidth state when images load to calculate the width of a single image
        setImageWidth(galleryRef.current.children[0].children[0].offsetWidth);
    };

    return (
        <section className="logos-section" id="gallery">
            <div className="title-container">
                <h2 className="title">Gallery</h2>
            </div>
            <div
                className='logos'
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
                <div className='logos-slide'>
                    {/* Duplicate images to create infinite loop effect */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                        <img
                            key={index}
                            src={`./img/gallery-img-${index}.jpg`}
                            alt={`gallery image ${index}`}
                            onLoad={handleImageLoad}
                        />
                    ))}
                </div>
                <div className='logos-slide'>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
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