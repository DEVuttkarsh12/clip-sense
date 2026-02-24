import React from 'react';

const Features = () => {
    const featureList = [
        {
            title: 'Semantic Intelligence',
            desc: 'ClipSense builds a deep understanding of your video\'s content, allowing for complex queries that go beyond simple text matching.'
        },
        {
            title: "Find spoken words instantly",
            desc: "Search for any phrase or keyword. ClipSense identifies the exact millisecond it was spoken.",
        },
        {
            title: "Jump to exact timestamps",
            desc: "No more scrubbing. Click a search result and the video jumps instantly to the right moment.",
        },
        {
            title: "Privacy first: no uploads",
            desc: "Your videos never leave your browser. AI processing happens locally on your machine.",
        },
        {
            title: "Visual Search (Coming Soon)",
            desc: "Search for objects, people, or scenes visually. The ultimate creative navigation tool.",
        },
        {
            title: 'Seamless Export',
            desc: 'Found the clips? Export them directly into your favorite editor or as timestamped markers.'
        },
    ];

    return (
        <section className="section features" id="features">
            <div className="container">
                <span className="eyebrow">Core Engine</span>
                <h2>Built for the future.</h2>
                <div className="features-grid">
                    {featureList.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
