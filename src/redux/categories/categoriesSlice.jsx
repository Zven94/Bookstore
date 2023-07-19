import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories_arr: [],
};

const underConstructionReducer = (state, action) => ({
  ...state,
  categories_arr: action.payload === 'Under construction' ? 'Under construction' : state.categories,
});

// Includes an array of categories

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    underConstruction: underConstructionReducer,
  },
});

export default categoriesSlice.reducer;
