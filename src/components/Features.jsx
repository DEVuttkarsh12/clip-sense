import React from 'react';

const Features = () => {
    const featureList = [
        {
            title: 'Semantic Intelligence',
            desc: 'ClipSense builds a deep understanding of your video\'s content, allowing for complex queries that go beyond simple text matching.'
        },
        {
            title: 'Local Sovereignty',
            desc: 'Your data stays on your machine. We use WASM and WebGPU to run heavy AI models directly in your browser.'
        },
        {
            title: 'Instant Timeline',
            desc: 'No more waiting for "processing". As soon as you drop a file, the indexing begins in real-time.'
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
