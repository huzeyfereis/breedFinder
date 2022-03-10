import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAllBreedsList,
  fetchSingleBreed,
  fetchSubBreed,
} from "../../store/breedFinderActions";

import Loading from "../../components/Loading";

import {
  Box,
  Button,
  FormHelperText,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Select,
} from "@mui/material";
import ImageList from "../../components/ImageList/ImageList";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const [breed, setBreed] = useState("");
  const [subBreeds, setSubBreeds] = useState([]);
  const [subBreed, setSubBreed] = useState("");
  const [numberOfImages, setNumberOfImages] = useState("");
  const [gridSize, setGridSize] = useState(4);
  const { breeds, isLoading, selectedBreedImages } = useSelector(
    (state) => state.breeds
  );

  useEffect(() => {
    dispatch(fetchAllBreedsList());
  }, []);

  const handleBreedSelect = (event) => {
    setBreed(event.target.value);
    const subs = Object.entries(breeds).filter((breed) => breed[1].length > 0);
    const sBreeds = subs.find((sub) => sub[0] === event.target.value);
    if (sBreeds !== undefined) {
      setSubBreeds(sBreeds);
      setGridSize(3);
    } else {
      setSubBreeds([]);
      setGridSize(4);
    }
  };

  const handleSubBreedSelect = (event) => {
    setSubBreed(event.target.value);
  };

  const handleNumberofImages = (event) => {
    setNumberOfImages(event.target.value);
  };

  const handleFetchData = () => {
    subBreeds.length === 0
      ? dispatch(fetchSingleBreed(breed, numberOfImages))
      : dispatch(fetchSubBreed(breed, subBreed, numberOfImages));
  };

  const handleBreedSearch = () => {
    if (breed && numberOfImages) {
      handleFetchData();
    } else if (breed && subBreed && numberOfImages) {
      handleFetchData();
    } else {
      alert("Please fill all missing inputs!");
    }
  };

  return (
    <Fragment>
      {isLoading && <Loading />}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={gridSize}>
            <FormControl fullWidth required sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-required-label">
                Breeds
              </InputLabel>
              <Select
                error={breed ? false : true}
                labelId="demo-simple-select-required-label"
                id="breed-select"
                value={breed}
                label="Breeds *"
                onChange={handleBreedSelect}
              >
                {Object.keys(breeds).map((breed) => (
                  <MenuItem value={breed} key={breed}>
                    {breed.toUpperCase()}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Please select a breed</FormHelperText>
            </FormControl>
          </Grid>

          {subBreeds.length > 0 && (
            <Grid item xs={gridSize}>
              <FormControl fullWidth required sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-required-label">
                  Sub Breeds
                </InputLabel>
                <Select
                  error={subBreed ? false : true}
                  labelId="demo-simple-select-required-label"
                  id="subBreed-select"
                  value={subBreed}
                  label="Sub Breeds *"
                  onChange={handleSubBreedSelect}
                >
                  {subBreeds.length > 0 &&
                    subBreeds[1].map((subBreed) => (
                      <MenuItem value={subBreed} key={subBreed}>
                        {subBreed.toUpperCase()}
                      </MenuItem>
                    ))}
                </Select>
                <FormHelperText>Please select a subbreed</FormHelperText>
              </FormControl>
            </Grid>
          )}
          <Grid style={{ margin: "8px auto" }} item xs={gridSize}>
            <TextField
              error={numberOfImages ? false : true}
              id="numberOfImagesInput"
              label="Number of Images"
              variant="outlined"
              helperText="Please enter number of images"
              onChange={handleNumberofImages}
              fullWidth
            />
          </Grid>
          <Grid item xs={gridSize} textAlign={"left"}>
            <Button
              style={{ margin: "1rem" }}
              variant="contained"
              onClick={handleBreedSearch}
            >
              View Images
            </Button>
          </Grid>
        </Grid>
        {selectedBreedImages.length > 0 && selectedBreedImages && (
          <ImageList images={selectedBreedImages} />
        )}
      </Box>
    </Fragment>
  );
};

export default HomePage;
