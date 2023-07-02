import { PayloadAction, createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { Categories, createEndpoint } from "../../helpers/endpoint";

export interface SliderState {
  movies: Movie[],
  currentPage: number,
  totalPages: number,
}

const initialState: SliderState = {
  movies: [],
  currentPage: 0,
  totalPages: 0,
}

/**
 * Create thunk with data fetching.
 *
 * @param {string} prefix The thunk ID prefix.
 * @param {string} url The url to recieve data.
 */
const createSliderFetcher = (prefix: string, url: string) => {
  return (
    createAsyncThunk(prefix, async (thunkAPI) => {
      const response = await fetch(url)
      const data = await response.json();
      return data.data.contents.data as Movie[];
    })
  )
}

export const fetchBestMovies = createSliderFetcher('best/fetch', createEndpoint(Categories.Best));

export const BestSliderSlice = createSlice({
  name: "bestSlider",
  initialState,
  reducers: {
    nextPage(state) {
      state.currentPage = (state.currentPage + 1) % (state.totalPages + 1)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBestMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.currentPage = 0;
    })
  }
});

export const fetchStoreMovies = createSliderFetcher('store/fetch', createEndpoint(Categories.Store));

export const StoreSliderSlice = createSlice({
  name: "storeSlider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStoreMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.currentPage = 0;
    })
  }
});

export const fetchOriginalMovies = createSliderFetcher('original/fetch', createEndpoint(Categories.Original));

export const OriginalSliderSlice = createSlice({
  name: "originalSlider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOriginalMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.currentPage = 0;
    })
  }
});


