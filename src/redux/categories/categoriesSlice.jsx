import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories_arr: [],
};

// Includes an array of categories

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    underConstructionReducer: (state, action) => ({
      ...state,
      categories_arr: action.payload === 'Under construction'
        ? 'Under construction'
        : state.categories_arr,
    }),
  },
});

export default categoriesSlice.reducer;
