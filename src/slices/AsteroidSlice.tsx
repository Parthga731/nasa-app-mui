import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { random } from "lodash";
import { toast } from "react-toastify";
import { mainInitialType } from "../Types/project.type";

const initialState = {
  randomAsteroidList: [],
  selectedAsteroid: {},
  searchtext: "",
} as mainInitialType;

export const getAsteroidDetail = createAsyncThunk(
  "perticular/asteroid",
  async (asteroidId: any) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=tIrVdchjzNyh5KptVhl51CFao1sCK3a2NdAT9IMy`
      );

      return response.data;
    } catch (err) {
      toast.error("Something went wrong while fetching Astroid Details");
    }
  }
);

export const getRandomAsteroidDetail = createAsyncThunk(
  "random/api",
  async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=tIrVdchjzNyh5KptVhl51CFao1sCK3a2NdAT9IMy`
      );

      return response.data;
    } catch (err) {
      toast.error("Something went wrong while fetching random Astroid Details");
    }
  }
);

const AsteroidSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    searchTextAction: (state, action) => {
      state.searchtext = action.payload;
    },
    randomBtnAction: (state) => {
      let id = random(0, 19);
      state.searchtext = state.randomAsteroidList[id].id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRandomAsteroidDetail.fulfilled, (state, action) => {
      state.randomAsteroidList = action.payload.near_earth_objects;
    });
    builder.addCase(getAsteroidDetail.fulfilled, (state, action) => {
      state.selectedAsteroid = action.payload;
    });
  },
});

export const { searchTextAction, randomBtnAction } = AsteroidSlice.actions;
export default AsteroidSlice.reducer;
