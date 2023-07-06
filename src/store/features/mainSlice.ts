import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Categories, createCategoryEndpoint } from "../../utils/endpoint";

export interface ISlider {
  category: Categories;
  movies: Movie[];
  currentPage: number;
  totalPages: number;
}

export interface MainState {
  activeMovie: Movie | null;
  sliders: ISlider[];
}

const initialState: MainState = {
  activeMovie: null,
  sliders: [],
};

/**
 * Create thunk with data fetching.
 *
 * @param {string} prefix The thunk ID prefix.
 * @param {string} url The url to recieve data.
 */
const createSliderFetcher = (prefix: string, url: string) => {
  return createAsyncThunk(prefix, async (thunkAPI) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("API request failed");
      }
      const data = await response.json();
      return data.data.contents.data as Movie[];
    } catch (error) {
      throw new Error("Error fetching data: " + error);
    }
  });
};

export const fetchBest = createSliderFetcher(
  "best/fetch",
  createCategoryEndpoint(Categories.Best)
);
export const fetchStore = createSliderFetcher(
  "store/fetch",
  createCategoryEndpoint(Categories.Store)
);
export const fetchOriginal = createSliderFetcher(
  "original/fetch",
  createCategoryEndpoint(Categories.Original)
);
export const fetchAction = createSliderFetcher(
  "action/fetch",
  createCategoryEndpoint(Categories.Action)
);
export const fetchDrama = createSliderFetcher(
  "drama/fetch",
  createCategoryEndpoint(Categories.Drama)
);
export const fetchSuspense = createSliderFetcher(
  "suspense/fetch",
  createCategoryEndpoint(Categories.Suspense)
);
export const fetchFamily = createSliderFetcher(
  "family/fetch",
  createCategoryEndpoint(Categories.Family)
);

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setActiveMovie: (state, action) => {
      state.activeMovie = action.payload;
    },
    clearActiveMovie: (state) => {
      state.activeMovie = null;
    },
    nextPage: (state, action) => {
      const slider = state.sliders.find(
        (slider) => slider.category === action.payload.category
      );
      if (slider) {
        slider.currentPage = (slider.currentPage + 1) % (slider.totalPages + 1);
        console.log(`Slider ${slider.category} page: ${slider.currentPage}`);
      }
    },
    prevPage: (state, action) => {
      const slider = state.sliders.find(
        (slider) => slider.category === action.payload.category
      );
      if (slider) {
        slider.currentPage =
          (slider.currentPage - 1 + (slider.totalPages + 1)) %
          (slider.totalPages + 1);
        console.log(`Slider ${slider.category} page: ${slider.currentPage}`);
      }
    },
  },
  extraReducers: (builder) => {
    const addSliderFulfilledCase = (category: Categories, fetchAction: any) => {
      builder.addCase(fetchAction.fulfilled, (state, action) => {
        const slider: ISlider = {
          category,
          movies: action.payload,
          currentPage: 0,
          totalPages: 3,
        };
        // Check if the slider already exists in the state
        const existingSlider = state.sliders.find(
          (slider) => slider.category === category
        );
        if (existingSlider) {
          // Update the movies for the existing slider
          existingSlider.movies = action.payload;
        } else {
          // Add the new slider to the state
          state.sliders.push(slider);
        }
      });
    };

    addSliderFulfilledCase(Categories.Best, fetchBest);
    addSliderFulfilledCase(Categories.Store, fetchStore);
    addSliderFulfilledCase(Categories.Original, fetchOriginal);
    addSliderFulfilledCase(Categories.Action, fetchAction);
    addSliderFulfilledCase(Categories.Drama, fetchDrama);
    addSliderFulfilledCase(Categories.Suspense, fetchSuspense);
    addSliderFulfilledCase(Categories.Family, fetchFamily);
  },
});

export const { nextPage, prevPage } = mainSlice.actions;

export default mainSlice.reducer;
