import React from 'react';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const handleChange = (e) => {
    onQuantityChange(item.id, parseInt(e.target.value, 10)); 
  };

  return (
    <div className="cart-item flex flex-col md:flex-row items-center justify-between p-4 border-b border-gray-200">
      <div className="item-details flex-1">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">Price: ${item.price}</p>
      </div>

      <div className="item-actions flex items-center space-x-4 mt-2 md:mt-0">
        <input
          type="number"
          value={item.quantity}
          min="1"
          onChange={handleChange}
          className="w-16 p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 font-semibold"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;