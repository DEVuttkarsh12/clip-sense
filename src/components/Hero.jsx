import React from 'react';

const Hero = () => {
    return (
        <section className="section hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1>Search Inside Your Videos. Instantly.</h1>
                    <p>
                        ClipSense lets creators upload a video directly in their browser and search inside it using AI-powered speech recognition and object detection.
                    </p>
                    <div className="hero-btns">
                        <button className="btn btn-primary">Join Beta</button>
                    </div>
                    <p className="hero-subtext">
                        Limited Beta — Get immediate access
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
