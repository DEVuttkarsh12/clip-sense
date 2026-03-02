import React from 'react';

const Hero = ({ onJoinBeta }) => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Now in Private Beta
                    </div>
                    <h1>Find any moment,<br />instantly.</h1>
                    <p className="hero-subtitle">
                        AI-powered visual and speech search for your videos.
                        No uploads, no scrubbing, 100% private.
                    </p>

                    <div className="hero-cta-wrapper">
                        <button className="btn btn-primary" onClick={onJoinBeta}>Join Free Beta</button>
                        <span className="hero-subtext">Join 500+ creators and editors</span>
                    </div>

                    <div className="hero-mockup-wrapper">
                        <div className="hero-mockup">
                            <div className="mock-search-bar">
                                <span className="search-icon">🔍</span>
                                <span className="search-text">"Find when I mentioned the project timeline"</span>
                            </div>
                            <div className="mock-video-frame">
                                <div className="mock-play-btn"></div>
                                <div className="mock-timestamp-bubbles">
                                    <div className="bubble" style={{ left: '20%' }}></div>
                                    <div className="bubble" style={{ left: '45%' }}></div>
                                    <div className="bubble" style={{ left: '80%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
