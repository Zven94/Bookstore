import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArr: [{
    item_id: Math.floor(Math.random() * (9999 - 1000)),
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: Math.floor(Math.random() * (9999 - 1000)),
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: Math.floor(Math.random() * (9999 - 1000)),
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  }],
};

// Includes an array of books
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: Math.floor(Math.random() * (9999 - 1000)),
        ...action.payload,
      };

      const isDuplicate = state.booksArr.some((book) => book.title === newBook.title
        && book.author === newBook.author);

      if (!isDuplicate) {
        state.booksArr.push(newBook);
        return state;
      }
      return state;
    },
    removeBook: (state, action) => ({
      ...state,
      booksArr: state.booksArr.filter((book) => book.item_id !== action.payload),
    }),
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
