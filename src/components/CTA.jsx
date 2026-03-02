import React from 'react';

const CTA = ({ onJoinBeta }) => {
    return (
        <section className="section cta">
            <div className="container">
                <div className="cta-box">
                    <span className="eyebrow">Early Access</span>
                    <h2>Ready to find<br />your best moments?</h2>
                    <p className="cta-subtext">Join curators, editors, and filmmakers using AI to search their footage.</p>
                    <button className="btn btn-primary" onClick={onJoinBeta}>Join Free Beta</button>
                    <div className="cta-footer-text">Launching early 2026. 100% Privacy first.</div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
