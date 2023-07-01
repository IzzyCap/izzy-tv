import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface SliderState {
  movies: Movie[],
  currentPage: number,
}

const initialState: SliderState = {
  movies: [],
  currentPage: -1
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

export const fetchBestMovies = createSliderFetcher('bestMovies/fetch', 'https://justcors.com/tl_4aa3c46/https://gizmo.rakuten.tv/v3/lists/gratis-la-mejor-seleccion-de-peliculas?classification_id=5&device_identifier=web&locale=es&market_code=es');

export const BestMoviesSliderSlice = createSlice({
  name: "bestMoviesSlider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBestMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.currentPage = 0;
    })
  }
});

export const fetchStoreMovies = createSliderFetcher('storeMovies/fetch', 'https://justcors.com/tl_4aa3c46/https://gizmo.rakuten.tv/v3/lists/tienda-las-peliculas-del-momento?classification_id=5&device_identifier=web&locale=es&market_code=es');

export const StoreMoviesSliderSlice = createSlice({
  name: "storeMoviesSlider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStoreMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.currentPage = 0;
    })
  }
});


