import { createSlice } from "@reduxjs/toolkit";

export interface ICategoryState {
  categoriesId: string;
  subCategoriesId: string;
  childCategoriesID: string;
  suggestions: string;
}

const initialState: ICategoryState = {
  categoriesId: "",
  subCategoriesId: "",
  childCategoriesID: "",
  suggestions: "",
};

const categorySlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categoriesId = action.payload;
    },
    setSubCategories: (state, action) => {
      state.subCategoriesId = action.payload;
    },
    setChildCategories: (state, action) => {
      state.childCategoriesID = action.payload;
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
  },
});

export const {
  setChildCategories,
  setCategories,
  setSubCategories,
  setSuggestions,
} = categorySlice.actions;
export default categorySlice.reducer;
