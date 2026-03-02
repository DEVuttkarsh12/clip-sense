import React from 'react';

const HowItWorks = () => {
    return (
        <section className="section how-it-works" id="how-it-works">
            <div className="container">
                <div className="features-header">
                    <span className="eyebrow">The Process</span>
                    <h2>Three steps to speed.</h2>
                    <p>Get started with ClipSense in seconds. No complex setup required.</p>
                </div>
                <div className="steps-container">
                    <div className="step-item">
                        <span className="step-num">01</span>
                        <h3>Drop your video</h3>
                        <p>Simply drag and drop your footage into the dashboard. It stays 100% on your machine.</p>
                    </div>
                    <div className="step-item">
                        <span className="step-num">02</span>
                        <h3>Neural Indexing</h3>
                        <p>Our lighting-fast AI scans the audio and visual tracks to build a deep semantic index.</p>
                    </div>
                    <div className="step-item">
                        <span className="step-num">03</span>
                        <h3>Search & Jump</h3>
                        <p>Type what you're looking for and jump to the exact moment. Export markers or clips instantly.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
