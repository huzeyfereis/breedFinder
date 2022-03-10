import axios from "axios";

export const getAllBreeds = async () => {
  return axios
    .get(`${process.env.REACT_APP_ALL_BREEDS_BASE_URL}list/all`)
    .then((response) => {
      if (!response) return null;
      return response;
    });
};

export const getSingleBreed = async (breed, numberOfImages) => {
  return axios
    .get(
      `${process.env.REACT_APP_SINGLE_BREED_BASE_URL}${breed}/images/random/${numberOfImages}`
    )
    .then((response) => {
      if (!response) return null;
      return response;
    });
};

export const getSubBreed = async (breed, subBreed, numberOfImages) => {
  return axios
    .get(
      `${process.env.REACT_APP_SINGLE_BREED_BASE_URL}${breed}/${subBreed}/images/random/${numberOfImages}`
    )
    .then((response) => {
      if (!response) return null;
      return response;
    });
};

export default { getAllBreeds, getSingleBreed, getSubBreed };
