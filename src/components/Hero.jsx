import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const heroImages = [
    '/assets/hero1.jpg',
    '/assets/hero2.jpg',
    '/assets/hero3.jpg',
    '/assets/hero4.jpg',
    '/assets/hero5.jpg',
    '/assets/hero6.jpg',
    '/assets/hero7.jpg',
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000 });

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="hero-section text-center d-flex align-items-center justify-content-center position-relative overflow-hidden">
            {/* Background Image Layers */}
            {heroImages.map((img, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${img}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: index === currentImageIndex ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out',
                        zIndex: -1
                    }}
                />
            ))}

            <div className="container position-relative" data-aos="fade-up" style={{ zIndex: 1 }}>
                <h1 className="display-3 fw-bold text-white">SKE TEXTILES & READYMADES</h1>

                {/* Tamil Subtitle */}
                <h2 className="hero-subtitle mt-2">(SKE துணிக்கடை)</h2>

                <p className="lead mt-3 text-white-50">
                    Discover our exclusive collection of premium textiles and readymade garments that define elegance.
                </p>

                <a href="https://sketextiles.gt.tc/products.php" className="btn btn-primary btn-lg mt-3">Explore Our Collection</a>
            </div>
        </header>
    );
};

export default Hero;
