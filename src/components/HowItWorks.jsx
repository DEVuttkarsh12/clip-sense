import React from 'react';

const HowItWorks = () => {
    return (
        <section className="section how-it-works" id="how-it-works">
            <div className="container">
                <span className="eyebrow">The Process</span>
                <h2>Three steps to clarity.</h2>

                <div className="steps-container">
                    <div className="step-item">
                        <span className="mono-label">01</span>
                        <h3>Import Master</h3>
                        <p>Drop your audio or video files. VidSift's local engine begins immediate semantic mapping.</p>
                    </div>

                    <div className="step-item">
                        <span className="mono-label">02</span>
                        <h3>Sift by Thought</h3>
                        <p>Query your footage using natural language. "Find when they discuss the budget" or "Locate the peak of the debate."</p>
                    </div>

                    <div className="step-item">
                        <span className="mono-label">03</span>
                        <h3>Export Script</h3>
                        <p>Instantly generate professional scripts with perfect timecodes. High-fidelity results in seconds.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
