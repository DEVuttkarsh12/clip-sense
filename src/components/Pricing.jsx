import React from 'react';

const Pricing = () => {
    return (
        <section className="section pricing" id="pricing">
            <div className="container">
                <span className="eyebrow">Sponsorship</span>
                <h2>Access the future.</h2>

                <div className="pricing-grid">
                    <div className="pricing-plan">
                        <span className="mono-label">The Starter</span>
                        <div className="price">$0</div>
                        <ul className="pricing-features">
                            <li>5 Hours of Audio Processing</li>
                            <li>Instant Transcript Search</li>
                            <li>100% Local Privacy</li>
                        </ul>
                    </div>

                    <div className="pricing-plan">
                        <span className="mono-label">The Pro</span>
                        <div className="price">$19</div>
                        <ul className="pricing-features">
                            <li>Unlimited Audio Processing</li>
                            <li>Multi-Speaker Detection</li>
                            <li>Batch Export Markers</li>
                            <li>Priority Support</li>
                        </ul>
                        <button className="btn btn-primary" style={{ marginTop: '20px' }}>Select Pro</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
