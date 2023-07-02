import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Categories, createEndpoint } from "../../helpers/endpoint";

export interface Slider {
  category: string;
  movies: Movie[],
  currentPage: number,
  totalPages: number,
}

export interface SlidersState {
  sliders: Slider[];
}

const initialState: SlidersState = {
  sliders: []
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

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    nextPage(state, action) {
      const sliders: Slider[] = state.sliders.map(slider => {
        if (slider.category === action.payload.category) {
          slider.currentPage++;
          if (slider.currentPage > slider.totalPages) {
            slider.currentPage = 0;
          }
          console.log(`Slider ${slider.category} page: ${slider.currentPage}`);
        }
        return slider;
      });

      return { ...state, sliders: [...sliders]}
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBestMovies.fulfilled, (state, action) => {
      const slider: Slider = {
        category: 'Best',
        movies: action.payload,
        currentPage: 0,
        totalPages: 3,
      }

      state.sliders.push(slider);
    })
  }
});

export const { nextPage } = sliderSlice.actions;

export default sliderSlice.reducer;
