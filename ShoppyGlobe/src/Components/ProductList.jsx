import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem'; // Ensure you have this component
import { FaSearch } from 'react-icons/fa'; // have to install this
import useFetchProducts from '../Hooks/useFetchProducts'; // Custom hook to fetch products
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; 

const ProductList = ({ updateNotificationCount }) => {
    const { products, loading, error } = useFetchProducts();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    // Filter products based on the search term
    useEffect(() => {
        setFilteredProducts(
            products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, products]);

    const handleAddToCart = (product) => {
        const existingItem = cartItems.find(item => 
        item.id === product.id);
        const newQuantity = existingItem ? existingItem.quantity + 1 : 1;
        dispatch(addToCart({ ...product, quantity: newQuantity }));
        updateNotificationCount(newQuantity); 
    };

    // Loading and error handling
    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return (
            <div className="text-center">
                <p>Error: {error}</p>
                <button 
                    className="mt-4 p-2 bg-blue-500 text-white rounded"
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-center mb-6 mt-4">
                <div className='relative w-full max-w-md'>
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-black rounded w-full pl-10"
                />
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <FaSearch 
                        className="text-black" />
                    </span>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductItem 
                            key={product.id} 
                            product={product} 
                            onAddToCart={handleAddToCart} 
                        />
                    ))
                ) : (
                    <div className="text-center col-span-full">No products found.</div>
                )}
            </div>
        </div>
    );
};

export default ProductList;