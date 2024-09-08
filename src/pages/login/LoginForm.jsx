import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// assets
import logo from '../../assets/logo.svg';

const LoginForm = () => {
    const [email, setEmail] = useState('admin@admin.com');
    const [password, setPassword] = useState('12345678');
    const uid = new URLSearchParams(window.location.search).get('uid') || '1231'; // Get UID from URL or default

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await axios.post(`https://one-hand/login?uid=${uid}`, {
            email,
            password,
            uid,

        }, {
            headers: {
            'X-secret-key': 'OH2024'
            }
        })

        // Store token in cookies
        document.cookie =response.data.data.token;

        // Navigate to dashboard
        navigate('/');

        } catch (error) {
            // Store static token in cookies for testing
            document.cookie = "token=one-hand1234; path=/";
            // Navigate to dashboard
            navigate('/');
        console.error('fetch failed:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="Black IN Logo" className="login-logo" />
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />

                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />

                    <button type="submit" className="login-btn">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
