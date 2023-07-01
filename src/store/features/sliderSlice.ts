import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface SliderState {
  movies: Movie[],
  currentPage: number,
}

const initialState: SliderState = {
  movies: [],
  currentPage: -1
}

export const fetchBestMovies = createAsyncThunk('bestMovies/fetch', async (thunkAPI) => {
  const response = await fetch('https://justcors.com/tl_4aa3c46/https://gizmo.rakuten.tv/v3/lists/gratis-la-mejor-seleccion-de-peliculas?classification_id=5&device_identifier=web&locale=es&market_code=es')
  const data = await response.json();
  return data.data.contents.data as Movie[];
});

export const fetchStoreMovies = createAsyncThunk('storeMovies/fetch', async (thunkAPI) => {
  const response = await fetch('https://justcors.com/tl_4aa3c46/https://gizmo.rakuten.tv/v3/lists/tienda-las-peliculas-del-momento?classification_id=5&device_identifier=web&locale=es&market_code=es')
  const data = await response.json();
  return data.data.contents.data as Movie[];
});

export const SliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    addMovie: (state: SliderState, action: PayloadAction<{ movie: Movie }>) => {
      state.movies.push( action.payload.movie );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBestMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.currentPage = 0;
    })
  }
});

export default SliderSlice.reducer;
export const { addMovie } = SliderSlice.actions;
