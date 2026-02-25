import React, { useState } from 'react';

const WaitlistPopup = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error, already_joined

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim().toLowerCase();

        // 1. Check if they already joined on this browser
        const joinedEmails = JSON.parse(localStorage.getItem('clipsense_waitlist_emails') || '[]');
        if (joinedEmails.includes(email)) {
            setStatus('already_joined');
            return;
        }

        setStatus('submitting');

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // 2. Save to local storage on success
                const updatedEmails = [...joinedEmails, email];
                localStorage.setItem('clipsense_waitlist_emails', JSON.stringify(updatedEmails));
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
                ) : status === 'already_joined' ? (
                    <div className="success-message">
                        <h3>Welcome back! 💌</h3>
                        <p>This email is already on our early access list. No further action is needed—we'll notify you as soon as we launch!</p>
                        <button className="btn btn-primary" onClick={onClose}>Cool</button>
                    </div>
                ) : (
                    <>
                        <h3>Join the Early Access</h3>
                        <p>Get notified the second we launch. No spam, ever.</p>

                        <form className="popup-form" onSubmit={handleSubmit}>
                            {/* Web3Forms Access Key */}
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
