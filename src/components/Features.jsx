import React from 'react';

const Features = () => {
    return (
        <section className="section features" id="features">
            <div className="container">
                <div className="features-header">
                    <span className="eyebrow">Core Engine</span>
                    <h2>Engineered for perfection.</h2>
                </div>

                <div className="features-grid">
                    <div className="feature-item">
                        <h3>Intelligent Transcription</h3>
                        <p>Leveraging state-of-the-art neural models to capture every nuance of speech with clinical accuracy.</p>
                    </div>

                    <div className="feature-item">
                        <h3>Semantic Navigation</h3>
                        <p>Search your audio library using meaning and context, not just keywords. Find thoughts, not just sounds.</p>
                    </div>

                    <div className="feature-item">
                        <h3>Zero-Latency Privacy</h3>
                        <p>Every byte of audio is processed locally on your machine. Your intellectual property never leaves your sight.</p>
                    </div>

                    <div className="feature-item">
                        <h3>Script-First Workflow</h3>
                        <p>Seamlessly export found moments directly into formatted scripts, marker lists, or research logs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
