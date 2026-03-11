import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <a href="/" className="logo-text">VidSift</a>
                    <p>© 2026 VidSift AI. All rights reserved.</p>
                </div>
                <div className="footer-links">
                    <a href="#features">Features</a>
                    <a href="mailto:contact@vidsift.ai">Contact</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
