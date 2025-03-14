import { createSlice } from "@reduxjs/toolkit";

// Initial cart state
const initialState = {
  cartItems: [],
  total: 0,
  cartTotal: 0, // renamed for consistency
};

// Create a Redux slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload); // Add item to cart
      state.total += parseFloat(action.payload.price); // Update total price
      state.cartTotal += 1; // Update cart count
    },
    removeFromCart: (state, action) => {
      // Find item index by id
      const index = state.cartItems.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.total -= parseFloat(state.cartItems[index].price);
        state.cartItems.splice(index, 1); // Remove item
        state.cartTotal -= 1; // Decrement cart count
      }
    },
  },
});

// Export actions
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export selector for cartTotal
export const selectCartTotal = (state) => state.cart.cartTotal;

// Export reducer
export default cartSlice.reducer;
