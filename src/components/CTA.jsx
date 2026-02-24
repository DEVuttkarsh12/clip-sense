import React, { useState } from 'react';

const CTA = ({ onJoinBeta }) => {
    return (
        <section className="section cta">
            <div className="container">
                <div className="cta-box">
                    <p className="eyebrow">Early Access</p>
                    <h2>Experience ClipSense Today.</h2>
                    <p className="cta-subtext">Join 150+ creators finding moments instead of scrubbing for them.</p>
                    <button className="btn btn-primary" onClick={onJoinBeta}>Join Free Beta</button>
                    <p className="cta-footer-text">Built by creators, for creators. Local first. Privacy foremost.</p>
                </div>
            </div>
        </section>
    );
};

export default CTA;
