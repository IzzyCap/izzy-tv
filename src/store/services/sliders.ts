import { ISlider, nextPage, prevPage } from "../features/mainSlice";

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
