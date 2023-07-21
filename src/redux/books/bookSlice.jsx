import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  booksArr: [],
  status: 'not started',
  error: null
};

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const apiKey = 'dQhdHp7wgEct1umI7942';

// ask for books datat
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await axios.get(`${baseURL}/${apiKey}/books`);
      const { data } = response;
      const booksData = Object.keys(data).map((key) => ({
        item_id: key,
        ...data[key][0]
      }));
      return booksData;
    } catch (error) {
      return Promise.reject(error.message ? error.message : error);
    }
  },
);

// send new book to API
export const addBook = createAsyncThunk(
  'books/addNewBook',
  async (newBook) => {
    try {
      const bookData = {
        ...newBook,
        item_id: Math.floor(Math.random() * (9999 - 1000)),
        category: 'Science fiction',
      };
      const response = await axios.post(`${baseURL}/${apiKey}/books`, bookData);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

// delete books from API
export const removeBook = createAsyncThunk(
  'books/deleteBook',
  async (bookID) => {
    try {
      const response = await axios.delete(`${baseURL}/${apiKey}/books/${bookID}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

// Includes an array of books
const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers(builder) {
    builder
      // loading action
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      // action has been succeeded
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        books: action.payload.map((book) => ({
          ...book,
          currentChapter: 'Chapter 1',
          completed: '0%',
        })),
      }))
      // the action was cancel or there were an error
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      // the action has created a new book into the list
      .addCase(addBook.fulfilled, (state, action) => {
       // console.log('imin')
        if (action.payload === 'created') {
          return {
            ...state,
            status: 'succeeded',
          };
        }
        return state;
      })
      // the action has deleted a new book into the list
      .addCase(removeBook.fulfilled, (state, action) => {
        if (action.payload === 'The book was deleted successfully!') {
          return {
            ...state,
            status: 'succeeded',
          };
        }
        return state;
      });
  }
});

//export const { addBook, removeBook } = bookSlice.actions;
export const AllBooks = (state) => state.books.books;
export const getStatus = (state) => state.books.status;
export const getError = (state) => state.books.error;

export default bookSlice.reducer;
