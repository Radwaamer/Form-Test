import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('token='));
        if (!token) {
        navigate('/login'); // Redirect if not logged in
        }
    }, [navigate]);

    return (
        <div className="stroke-text">
            <h1>Welcome to the dashboard</h1>
        </div>
    );
};

export default Home;
