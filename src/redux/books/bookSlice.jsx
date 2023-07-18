import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  books_arr: [],
  categories_arr: []
}

//Includes an array of books

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (book_id) => {
      books_arr.push(book_id)
    },
    removeBook: (book_id) => {
      books_arr.splice(book_arr.indexOf(book_id))
    }
  }
})
