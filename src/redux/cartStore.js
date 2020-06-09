import { createSlice, createSelector } from '@reduxjs/toolkit';

const add = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const remove = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const slice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, { payload }) => {
      state.items = add(state.items, payload);
    },
    removeItemFromCart: (state, { payload }) => {
      state.items = state.items.filter((el) => el.id !== payload.id);
    },
    removeItem: (state, { payload }) => {
      state.items = remove(state.items, payload);
    },
    cleanCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  removeItemFromCart,
  cleanCart,
} = slice.actions;

export const cartSelector = (state) => state.cart;

const selectCartItems = (state) => state.cart.items;

export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotal = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);

export default slice.reducer;
