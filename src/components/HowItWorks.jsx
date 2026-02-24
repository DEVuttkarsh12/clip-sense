import React from 'react';

const HowItWorks = () => {
    return (
        <section className="section how-it-works" id="how-it-works">
            <div className="container">
                <span className="eyebrow">The Method</span>
                <h2>Three steps to clarity.</h2>
                <div className="steps-container">
                    <div className="step-item">
                        <span className="step-num">01</span>
                        <h3>Drop your file.</h3>
                        <p>ClipSense begins indexing locally as soon as the file touches your browser.</p>
                    </div>
                    <div className="step-item">
                        <span className="step-num">02</span>
                        <h3>Wait for the spark.</h3>
                        <p>AI runs in the background, mapping every frame and phoneme to a searchable index.</p>
                    </div>
                    <div className="step-item">
                        <span className="step-num">03</span>
                        <h3>Search and find.</h3>
                        <p>Type what you're looking for and jump directly to the right moment. Instantly.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
