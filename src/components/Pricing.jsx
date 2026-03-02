import React from 'react';

const Pricing = () => {
    return (
        <section className="section pricing" id="pricing">
            <div className="container">
                <div className="features-header">
                    <span className="eyebrow">Pricing</span>
                    <h2>A plan for every creator.</h2>
                    <p>Start for free. Upgrade for more power.</p>
                </div>
                <div className="pricing-grid">
                    <div className="pricing-card">
                        <span className="eyebrow">The Starter</span>
                        <div className="price">$0<span>/mo</span></div>
                        <ul className="pricing-features">
                            <li>5 Hours of Video Processing</li>
                            <li>Semantic Speech Search</li>
                            <li>100% Local Processing</li>
                        </ul>
                    </div>
                    <div className="pricing-card pro">
                        <span className="eyebrow">The Pro Bundle</span>
                        <div className="price">$19<span>/mo</span></div>
                        <ul className="pricing-features">
                            <li>Unlimited Processing</li>
                            <li>Visual Search (AI Vision)</li>
                            <li>Batch Export Markers</li>
                            <li>Priority Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
