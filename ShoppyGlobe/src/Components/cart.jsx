import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../redux/cartSlice'; // Make sure to import clearCart
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Make sure you have to install this and import it 
import { faPlus, faMinus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    // Handle removing an item from the cart
    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    // Handle clearing the cart
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    // Handle proceeding to checkout
    const handleCheckout = () => {
        if (cartItems.length > 0) {
            handleClearCart(); // Clear the cart before navigating to checkout
            navigate('/checkout');
        } else {
            alert('Your cart is empty. Add some items before proceeding to checkout.');
        }
    };

    // Handle increasing the quantity of an item
    const handleIncreaseQuantity = (itemId) => {
        dispatch({ type: 'cart/increaseQuantity', payload: itemId });
    };

    // Handle decreasing the quantity of an item
    const handleDecreaseQuantity = (itemId) => {
        dispatch({ type: 'cart/decreaseQuantity', payload: itemId });
    };

    return (
        <div className="p-4 rounded-md">
            <h2 className="text-3xl font-bold mb-6 flex justify-center">Your Cart</h2>
            {cartItems.length === 0 ? (
                <div className='flex flex-col items-center justify-center flex-grow text-center'>
                    <p className='text-lg text-black mt-7'>Your cart is empty.</p>
                    <button
                        onClick={() => navigate('/browse')}
                        className="bg-black text-white px-4 py-2 mt-4 rounded"
                    >
                        Back to Browse
                    </button>
                </div>

            ) : (



                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="border-b py-4 flex items-center">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-16 h-16 object-cover mr-4"
                            />
                            <div className="flex-grow">
                                <h3 className="font-bold">{item.title}</h3>
                                <p>{item.description}</p>
                                <p>Price: ${item.price}</p>
                            </div>
                            <div className="flex items-center ml-4">
                                <button
                                    onClick={() => handleDecreaseQuantity(item.id)}
                                    className="bg-gray-300 text-black px-2 py-1 rounded"
                                >
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <span className="mx-2">{item.quantity}</span>
                                <button
                                    onClick={() => handleIncreaseQuantity(item.id)}
                                    className="bg-gray-300 text-black px-2 py-1 rounded"
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                                <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded ml-4"
                                >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4 font-bold">
                        Total Price: ${totalPrice.toFixed(2)}
                    </div>
                    <div className="mt-6 flex flex-col space-y-4">


                        <button
                            onClick={handleCheckout}
                            className="bg-black text-white px-4 py-2 rounded"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;