import React from 'react';

const Hero = () => {
    return (
        <section className="section hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1>Instantly find any moment inside your video — no uploads, no scrubbing.</h1>
                    <p>
                        AI speech & visual search that works entirely in your browser. Privacy first, speed foremost.
                    </p>
                    <div className="hero-btns">
                        <button className="btn btn-primary">Join Free Beta</button>
                    </div>
                    <p className="hero-subtext">
                        Join 150+ creators getting early access
                    </p>

                    <div className="hero-mockup">
                        <div className="mock-search-bar">
                            <span className="search-icon">🔍</span>
                            <span className="search-text">Find "moment where I talk about growth..."</span>
                        </div>
                        <div className="mock-video-frame">
                            <div className="mock-play-btn"></div>
                            <div className="mock-timestamp-bubbles">
                                <div className="bubble" style={{ left: '20%' }}></div>
                                <div className="bubble" style={{ left: '45%' }}></div>
                                <div className="bubble" style={{ left: '70%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
