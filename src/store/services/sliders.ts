import { Slider, nextPage } from "../features/sliderSlice";

export const NextPage = async (dispatch: any, slider: Slider) => {
  try {
    dispatch(nextPage(slider))
  } catch {
    console.log('Error!');
  }
}
