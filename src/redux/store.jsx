import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default { store };
