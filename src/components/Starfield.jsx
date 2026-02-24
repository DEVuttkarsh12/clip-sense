import React, { useMemo } from 'react';

const Starfield = () => {
    const stars = useMemo(() => {
        return Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 2 + 1}px`,
            duration: `${Math.random() * 4 + 3}s`,
            delay: `${Math.random() * 5}s`,
        }));
    }, []);

    return (
        <div className="stars-container global-stars">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        '--duration': star.duration,
                        animationDelay: star.delay,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Starfield;
