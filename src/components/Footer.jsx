import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <a href="/" className="logo-text">ClipSense</a>
                    <p>© 2026 ClipSense AI. All rights reserved.</p>
                </div>
                <div className="footer-links">
                    <a href="#features">Features</a>
                    <a href="mailto:contact@clipsense.ai">Contact</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
