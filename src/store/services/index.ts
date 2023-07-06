import { ISlider, nextPage, prevPage, setActiveMovie, clearActiveMovie } from "../features/mainSlice";

export const SetActiveMovie = async (dispatch: any, movie: Movie) => {
  console.log('SetActiveMovie');
  console.log(movie);
  try {
    dispatch(setActiveMovie(movie));
  } catch (ex) {
    console.log(ex);
  }
}

export const ClearActiveMovie = async (dispatch: any, movie: Movie) => {
  console.log('ClearActiveMovie');
  try {
    dispatch(clearActiveMovie());
  } catch (ex) {
    console.log(ex);
  }
}

export const NextPage = async (dispatch: any, slider: ISlider) => {
  try {
    dispatch(nextPage(slider));
  } catch (ex) {
    console.log(ex);
  }
};

export const PrevPage = async (dispatch: any, slider: ISlider) => {
  try {
    dispatch(prevPage(slider));
  } catch (ex) {
    console.log(ex);
  }
};
