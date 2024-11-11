import React from 'react';
import './Subscribe.css'; // Import the CSS file

const Subscribe = () => {
    return (
        <div className="subscribe-container">
            <div className="subscribe-content">
                <div className="form-section">
                    <h1>SUBSCRIBE</h1>
                    <p>Subscribe below to get news and updates on events, merchandise, new releases from BGYO!</p>
                    <input type="email" placeholder="Email Address" required />
                    <input type="text" placeholder="Full Name (optional)" />
                    <button type="submit" className="signup-button">SIGN UP</button>
                    <div className="terms">
                        <label>
                            <input type="checkbox" />
                            <span>I confirm that I have read and agree to Terms and Conditions.</span>
                        </label>
                        <label>
                            <input type="checkbox" />
                            <span>I confirm that I have read and agree to Privacy Policy.</span>
                        </label>
                    </div>
                    <div className="recaptcha">
                        <label>
                            <input type="checkbox" />
                            <span>I'm not a robot</span>
                        </label>
                    </div>
                </div>
                <div className="subscribe-image">
                    <img src="/images/subscribeimg.png" alt="BGYO Group" />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
