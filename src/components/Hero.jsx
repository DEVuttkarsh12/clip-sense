import React from 'react';
import HeroVisual from './HeroVisual';

const Hero = ({ onJoinBeta }) => {
    return (
        <section className="hero">
            <HeroVisual />

            <div className="hero-content">
                <span className="eyebrow">Professional Workflow</span>
                <h1>Sift through sound.<br />Script with precision.</h1>
                <p className="hero-subtitle">
                    A semantic AI workflow for curators and researchers to search audio by meaning and export polished scripts in seconds.
                </p>

                <div className="hero-cta-wrapper">
                    <button className="btn btn-primary" onClick={onJoinBeta}>
                        Request Early Access
                    </button>
                    <div className="hero-subtext">Launching Early 2026 • 100% Local Privacy</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
