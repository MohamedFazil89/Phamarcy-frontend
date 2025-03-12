import { createSlice } from "@reduxjs/toolkit";

// Initial cart state
const initialState = {
  cartItems: [],
  total: 0,
};

// Create a Redux slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload); // Add item to cart
      state.total += parseFloat(action.payload.price); // Update total
    },
    removeFromCart: (state, action) => {
      // Find item index
      const index = state.cartItems.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.total -= parseFloat(state.cartItems[index].price);
        state.cartItems.splice(index, 1); // Remove item
      }
    },
  },
});

// Export actions
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
