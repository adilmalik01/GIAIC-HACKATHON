import { Error, Sucess } from "@/app/components/Alerts/Alert";
import { createSlice } from "@reduxjs/toolkit";

// Function to get cart from local storage
const getCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }
  return [];
};

const initialState = {
  cartItems: getCartFromLocalStorage(),
};

const saveToLocalStorage = (cartItems: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item._id === action.payload._id
      );

      if (itemIndex > -1) {
        Error("Already Added In Cart", "warning");
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
        Sucess("Added To Cart", "success");
      }

      saveToLocalStorage(state.cartItems);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item: any) => item._id !== action.payload
      );

      saveToLocalStorage(state.cartItems);
    },

    IncreaseItemQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item._id === action.payload
      );

      console.log(itemIndex);

      if (itemIndex > -1) {
        state.cartItems[itemIndex].quantity += 1;
        state.cartItems[itemIndex].totalPrice = state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price;
        Sucess("Quantity Increased", "success");
        saveToLocalStorage(state.cartItems);
      }
    },

    DecreaseItemQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item._id === action.payload
      );

      console.log(itemIndex);
      

      if (itemIndex > -1 && state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
        state.cartItems[itemIndex].totalPrice = state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price;
        Sucess("Quantity Decreased", "success");
        saveToLocalStorage(state.cartItems);
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      saveToLocalStorage(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, IncreaseItemQuantity, DecreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
