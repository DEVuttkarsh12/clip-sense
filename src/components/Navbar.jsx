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
                <a href="/" className="logo">ClipSense</a>
                <ul className="nav-links">
                    <li><a href="#problem">The Problem</a></li>
                    <li><a href="#solution">The Solution</a></li>
                    <li><a href="#features">Features</a></li>
                </ul>
                <div className="nav-cta">
                    <a href="#" className="login-link">Log In</a>
                    <button className="btn btn-primary" onClick={onJoinBeta}>Join Free Beta</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
