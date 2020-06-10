import { createSlice, createSelector } from '@reduxjs/toolkit';

import { add, remove } from 'utils';

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
