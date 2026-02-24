import React from 'react';

const Pricing = () => {
    return (
        <section className="section pricing" id="pricing">
            <div className="container">
                <span className="eyebrow">The Exchange</span>
                <h2>Choose your power.</h2>
                <div className="pricing-grid">
                    <div className="pricing-card">
                        <h3>Personal</h3>
                        <div className="price">$0<span>/mo</span></div>
                        <ul className="price-features">
                            <li>Up to 2GB files</li>
                            <li>Basic Speech Recognition</li>
                            <li>Local Indexing</li>
                        </ul>
                        <button className="btn btn-secondary">Get Started</button>
                    </div>
                    <div className="pricing-card pro">
                        <span className="pro-tag">Recommended</span>
                        <h3>Pro</h3>
                        <div className="price">$19<span>/mo</span></div>
                        <ul className="price-features">
                            <li>Unlimited file size</li>
                            <li>Advanced Visual Search</li>
                            <li>Priority Feature Access</li>
                        </ul>
                        <button className="btn btn-primary">Go Pro</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
