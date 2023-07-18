import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categories_arr: []
}

const underConstructionReducer = (state) => {
  return (
    <h3>Under Construction</h3>
  )
}

//Includes an array of categories

export const categoriesSlice= createSlice ({
  name: 'categories',
  initialState,
  reducers: {
    underConstruction: underConstructionReducer,
  }
})