import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArr: [],
  categoriesArr: [],
};

// Includes an array of books

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: () => {
    },
    removeBook: () => {
    },
  },
});

export default bookSlice;
