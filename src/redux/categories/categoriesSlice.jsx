import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories_arr: [],
};

const underConstructionReducer = () => (
  <h3>Under Construction</h3>
);

// Includes an array of categories

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    underConstruction: underConstructionReducer,
  },
});

export default categoriesSlice;
