import React, { useState } from 'react';

const WaitlistPopup = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
            } else {
                console.error("Web3Forms Error:", data);
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close" onClick={onClose}>×</button>

                {status === 'success' ? (
                    <div className="success-message">
                        <h3>You're on the list! 🚀</h3>
                        <p>Thank you for your interest in ClipSense. We'll notify you as soon as early access is available.</p>
                        <button className="btn btn-primary" onClick={onClose}>Got it</button>
                    </div>
                ) : (
                    <>
                        <h3>Join the Early Access</h3>
                        <p>Get notified the second we launch. No spam, ever.</p>

                        <form className="popup-form" onSubmit={handleSubmit}>
                            {/* IMPORTANT: YOUR ACCESS KEY GOES HERE */}
                            <input type="hidden" name="access_key" value="26af0562-6a36-44ba-90b6-6931d8676b8b" />
                            <input type="hidden" name="subject" value="New ClipSense Waitlist Signup" />
                            <input type="hidden" name="from_name" value="ClipSense Landing Page" />

                            <input
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                                required
                                disabled={status === 'submitting'}
                            />
                            <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Joining...' : 'Notify Me'}
                            </button>
                            {status === 'error' && (
                                <p className="error-text">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default WaitlistPopup;
