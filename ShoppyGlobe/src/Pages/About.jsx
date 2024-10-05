import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1); 
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 relative">
            <button 
                onClick={handleClose} 
                className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                &times;
            </button>
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-center max-w-2xl">
                Welcome to ShoppyGlobe! We are dedicated to providing you with the best online shopping experience.
                Our mission is to offer a wide range of products at competitive prices while ensuring exceptional customer service.
            </p>
            <p className="mt-4 text-lg text-center">
                Thank you for choosing us!
            </p>
        </div>
    );
};

export default About;