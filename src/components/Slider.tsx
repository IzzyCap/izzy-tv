import styled from "styled-components";
import SliderItem from "./SliderItem";
import { useAppSelector } from "../store/store";
import { Categories } from "../utils/endpoint";
import { ISlider } from "../store/features/mainSlice";
import { NextPage, PrevPage } from "../store/services";
import { useDispatch } from "react-redux";
import { useRef } from "react";

import { ReactComponent as LeftArrow } from "../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../assets/icons/right-arrow.svg";

// Styled component for the container of the slider
const SliderContainer = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  padding: 0px 0px 0px 40px;
  margin-bottom: 25px;
`;

// Styled component for the slide container within the slider
const Slides = styled.div`
  width: 100%;
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  transition: all 0.5s ease;
`;

// Styled component for the title of the slider
const Title = styled.h5`
  transition: color 0.15s ease-out 0s;
  display: block;
  word-break: break-word;
  font-size: 1.2rem;
  font-weight: bold;
  color: rgb(240, 240, 240);
  text-align: left;
  line-height: 28px;
  margin-bottom: 10px;
`;

// Reusable styled component for the navigation buttons
const NavigationButton = styled.div`
  position: absolute;
  bottom: 0px;
  width: 40px;
  height: 100%;
  z-index: 100;
  svg {
    width: 100%;
    height: 100%;
    transition: 0.3s;
    background: linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 100%);
    opacity: 0;
    position: relative;
    top: calc(50% + 10px);
    transform: translateY(-50%);
  }
  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

// Styled component for the previous button
const Prev = styled(NavigationButton)`
  left: 0;
  background: linear-gradient(to left, transparent 0%, rgb(16, 16, 16) 90%);
`;

// Styled component for the next button
const Next = styled(NavigationButton)`
  right: 0;
  background: linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 100%);
`;

interface SliderProps {
  title: string;
  category: Categories;
}

const Slider: React.FC<SliderProps> = ({ title, category }: SliderProps) => {
  const dispatch = useDispatch();

  const sliderRef = useRef<HTMLDivElement>(null);

  // Retrieve the slider data from the Redux store
  const slider = useAppSelector((state: any) => {
    const sliders = state["mainSlice"].sliders;
    return sliders.find((slider: ISlider) => slider.category === category);
  });

  // Create the slider items based on the slider data
  const createSliderItems = () => {
    if (slider !== undefined) {
      return slider.movies.map((movie: Movie) => {
        return (
          <SliderItem
            key={movie.id}
            movie={movie}
            category={category}
          ></SliderItem>
        );
      });
    }
  };

  // Handle the navigation of the slider
  const handleSliderNavigation = (direction: 'prev' | 'next') => {
    if (sliderRef.current?.scrollLeft) {
      const scrollWidth = sliderRef.current?.clientWidth;
      sliderRef.current.scrollLeft += direction === 'prev' ? -scrollWidth : scrollWidth;
    }
  
    if (direction === 'prev') {
      PrevPage(dispatch, slider);
    } else {
      NextPage(dispatch, slider);
    }
  };

  return (
    <SliderContainer>
      <Title>{title}</Title>
      <Prev onClick={() => handleSliderNavigation('prev')}>
        <LeftArrow/>
      </Prev>

      <Next onClick={() => handleSliderNavigation('next')}>
        <RightArrow/>
      </Next>
      <Slides ref={sliderRef}>{createSliderItems()}</Slides>
    </SliderContainer>
  );
};

export default Slider;
