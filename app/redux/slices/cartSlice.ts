import { Error, Sucess } from "@/app/components/Alerts/Alert";
import { createSlice } from "@reduxjs/toolkit";



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
      const itemIndex: any = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        Error("Already Added In Cart","warning")
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        Sucess("Added In Cart","success")
      }

      saveToLocalStorage(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item: any) => item.id !== action.payload
      );


      saveToLocalStorage(state.cartItems);
    },

    IncreaseItemQuantity: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item: any) => item.quantity += 1
      )

      saveToLocalStorage(state.cartItems);
    },

    DecreaseItemQuantity: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item: any) => item.quantity -= 1
      )
      saveToLocalStorage(state.cartItems);
    },

clearCart: (state) => {
  state.cartItems = [];
},
  },
});

export const { addToCart, removeFromCart, clearCart, IncreaseItemQuantity, DecreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
