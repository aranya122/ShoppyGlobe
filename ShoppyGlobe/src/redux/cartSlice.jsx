import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            // Add the product
            const existingProduct = state.items.find(item => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1; 
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); 
            }
        },
        removeItem: (state, action) => {
            const id = action.payload; // assuming payload is the id of the item to remove
            const existingItemIndex = state.items.findIndex((item) => item.id === id);

            if (existingItemIndex !== -1) {
                // Remove the item if it exists in the cart
                state.items.splice(existingItemIndex, 1);
            }
        },
        updateCartItem: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity = quantity; // Update the quantity
            }
        },

        
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const existingProduct = state.items.find(item => item.id === id);
            if (existingProduct) {
                existingProduct.quantity += 1; // Increase the quantity
            }
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const existingProduct = state.items.find(item => item.id === id);
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1; // Decrease the quantity
                } else {
                    
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        },
        clearCart:(state) => {
            state.items = []
        }
    },
});

export const { addToCart, removeItem, updateCartItem, increaseQuantity, decreaseQuantity,clearCart } = cartSlice.actions;
export default cartSlice.reducer;