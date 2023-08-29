import { createSlice } from "@reduxjs/toolkit";

const favoritesSlices = createSlice({
  name: 'favorites',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.slice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritesSlices.actions.addFavorite;
export const removeFavorite = favoritesSlices.actions.removeFavorite;
export default favoritesSlices.reducer;
