import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const cartCount = useSelector((state) => state.cart.items.length); 

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prevState => !prevState);
    };

    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-xl font-bold">ShoppyGlobe</h1>
                <nav className={`hidden md:flex space-x-4`}>
                    {/* Adding hover effect with yellow underline */}
                    <Link 
                        to="/product" 
                        className="hover:text-gray-200 text-sm hover:border-b-2 border-yellow-500"
                    >
                        Product
                    </Link>
                    <Link 
                        to="/about" 
                        className="hover:text-gray-200 text-sm hover:border-b-2 border-yellow-500"
                    >
                        About
                    </Link>
                    <Link 
                        to="/contact" 
                        className="hover:text-gray-200 text-sm hover:border-b-2 border-yellow-500"
                    >
                        Contact
                    </Link>
                </nav>
                <div className="relative">
                    <Link to="/cart" className="flex items-center">
                        <div className="relative"> {/* Wrapping div to make cart icon relative */}
                            <FaShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                        <span className="ml-1">Cart</span> {/* Cart word */}
                    </Link>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button 
                        id="mobile-menu-button" 
                        className="focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white px-4 py-2">
                    <Link to="/product" className="block py-2 text-sm hover:text-gray-200 hover:border-b-2 border-yellow-500 w-max px-2">Product</Link>
                    <Link to="/about" className="block py-2 text-sm hover:text-gray-200 hover:border-b-2 border-yellow-500 w-max px-2">About</Link>
                    <Link to="/contact" className="block py-2 text-sm hover:text-gray-200 hover:border-b-2 border-yellow-500 w-max px-2">Contact</Link>
                </div>
            )}
        </header>
    );
};

export default Header;