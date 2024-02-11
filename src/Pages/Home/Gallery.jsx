import React, { useEffect } from 'react';

export default function Gallery() {
    return (
        <section>
            <div className="gallery-content">
                <h2 className="title">Gallery</h2>
                <div className="gallery-slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img src="./img/wheel-icon.png" alt="Wheel" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}