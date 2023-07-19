import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArr: [],
};

// Includes an array of books

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      booksArr: [...state.booksArr, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      booksArr: state.booksArr.filter((book) => book.id !== action.payload),
    }),
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
