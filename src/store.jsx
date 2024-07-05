// store.js
import { configureStore } from '@reduxjs/toolkit';
import navReducer from "./slices/navslice";


const store = configureStore({
  reducer: {
    nav: navReducer,
    },
});

export default store;
