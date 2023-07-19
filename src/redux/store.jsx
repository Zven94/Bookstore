import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/bookSlice';
import categoriesSlice from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});

export default { store };
