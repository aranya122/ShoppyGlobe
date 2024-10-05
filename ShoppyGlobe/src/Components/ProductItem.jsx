import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart, updateCartItem } from '../redux/cartSlice';// Adjust the import path as needed
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items); // Assuming cart items are in the Redux state

    const handleAddToCart = () => {
        const existingProduct = cartItems.find(item => item.id === product.id);

        if (existingProduct) {
            // Increase quantity if the product already exists in the cart
            dispatch(updateCartItem(existingProduct.id, existingProduct.quantity + 1));
            toast.success('Increased quantity in cart!');
        } else {
            // Add new product to cart
            dispatch(addToCart({ ...product, quantity: 1 }));
            toast.success('Item added to cart!');
        }
    };


    return (
        <div className="border p-4 rounded">
            <h3 className="text-lg font-bold">
                {/* Link to the product detail page */}
                <Link to={`/products/${product.id}`} className="text-black hover:underline">
                    {product.title}
                </Link>
            </h3>

            
            <Link to={`/products/${product.id}`}>
                <img 
                    src={product.thumbnail || product.image}  
                    alt={product.title} 
                    className="w-full h-auto mb-2 rounded shadow-md"
                />
            </Link>

            <p>{product.description}</p>
            <p className="font-bold">${product.price}</p>

            <button 
                className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductItem;