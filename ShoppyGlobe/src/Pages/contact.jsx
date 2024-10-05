import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleClose = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 relative">
            <button 
                onClick={handleClose} 
                className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                &times;
            </button>
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="4"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;