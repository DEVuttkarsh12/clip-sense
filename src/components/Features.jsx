import React from 'react';

const Features = () => {
    return (
        <section className="section features" id="features">
            <div className="container">
                <div className="features-header">
                    <span className="eyebrow">Capabilities</span>
                    <h2>Engineered for speed.</h2>
                    <p>Powerful AI search that stays 100% on your device.</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🎙️</div>
                        <h3>Semantic Speech Search</h3>
                        <p>Find exact moments by searching what was spoken. No transcripts needed—just search.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">👁️</div>
                        <h3>Visual Moment Search</h3>
                        <p>Search for visual elements like "the part where the car appears" or "shot of the waterfall."</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Local-First Privacy</h3>
                        <p>Your videos never leave your machine. Processing happens entirely in your browser.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Instant Timestamps</h3>
                        <p>Jump to the exact frame you're looking for. No more manual scrubbing through footage.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
