import React, { useState, useEffect } from 'react';

const Navbar = ({ onJoinBeta }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="/" className="logo-text">VidSift</a>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#join" onClick={onJoinBeta} style={{ color: 'var(--accent-gold)' }}>Request Access</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
