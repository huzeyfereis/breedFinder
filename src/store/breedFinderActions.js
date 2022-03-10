import { breedFinderActions } from "./breedFinderSlice";
import breedFinderService from "../services/breedFinderService";

const {
  setAllBreedsRequest,
  setAllBreeds,
  setSingleBreedRequest,
  setSingleBreed,
  setSubBreedRequest,
  setSubBreed,
} = breedFinderActions;

export const fetchAllBreedsList = () => (dispatch) => {
  dispatch(setAllBreedsRequest());

  breedFinderService
    .getAllBreeds()
    .then((response) => dispatch(setAllBreeds(response.data.message)))
    .catch((err) => alert(err));
};

export const fetchSingleBreed = (breed, numberOfImages) => (dispatch) => {
  dispatch(setSingleBreedRequest(breed, numberOfImages));

  breedFinderService
    .getSingleBreed(breed, numberOfImages)
    .then((response) => dispatch(setSingleBreed(response.data.message)));
};

export const fetchSubBreed =
  (breed, subBreed, numberOfImages) => (dispatch) => {
    dispatch(setSubBreedRequest(breed, numberOfImages));

    breedFinderService
      .getSubBreed(breed, subBreed, numberOfImages)
      .then((response) => dispatch(setSubBreed(response.data.message)));
  };
