import React, { useState, useEffect } from 'react';

const Navbar = () => {
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
                <div className="logo">ClipSense</div>
                <ul className="nav-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#how-it-works">How it Works</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                </ul>
                <div className="nav-cta">
                    <a href="#" className="login-link">Log In</a>
                    <button className="btn btn-primary">Join Free Beta</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
