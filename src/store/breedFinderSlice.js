import { createSlice } from "@reduxjs/toolkit";

const breedFinderSlice = createSlice({
  name: "breedFinder",
  initialState: {
    breeds: [],
    selectedBreedImages: [],
    subBreedImages: [],
    isFetched: false,
    isLoading: false,
  },
  reducers: {
    setAllBreedsRequest: (state) => {
      state.isLoading = true;
      state.breeds = [];
      state.isFetched = true;
    },

    setAllBreeds: (state, action) => {
      state.breeds = action.payload;
      state.isLoading = false;
    },
    setSingleBreedRequest: (state, action) => {
      state.isLoading = true;
      state.selectedBreedImages = [];
      state.isFetched = true;
    },
    setSingleBreed: (state, action) => {
      state.selectedBreedImages = action.payload;
      state.isLoading = false;
    },
    setSubBreedRequest: (state, action) => {
      state.isLoading = true;
      state.selectedBreedImages = [];
      state.isFetched = true;
    },
    setSubBreed: (state, action) => {
      state.selectedBreedImages = action.payload;
      state.isLoading = false;
    },
  },
});

export const breedFinderActions = breedFinderSlice.actions;

export default breedFinderSlice;
