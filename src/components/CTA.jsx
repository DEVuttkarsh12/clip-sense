import React, { useState } from 'react';

const CTA = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <section className="section cta">
            <div className="container">
                <div className="cta-box">
                    <h2>Experience ClipSense Today.</h2>
                    <button className="btn btn-primary" onClick={() => setIsPopupOpen(true)}>Join Beta</button>
                </div>
            </div>

            {isPopupOpen && (
                <div className="popup-overlay" onClick={() => setIsPopupOpen(false)}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="popup-close" onClick={() => setIsPopupOpen(false)}>×</button>
                        <h3>Join the Early Access</h3>
                        <p>Enter your email. We will notify you as soon as possible when the product launches. No spam, just a single notify about the product launch so you get to use it as early access.</p>
                        <form className="popup-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="email@example.com" required />
                            <button type="submit" className="btn btn-primary">Notify Me</button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CTA;
