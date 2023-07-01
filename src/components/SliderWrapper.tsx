import styled from 'styled-components';
// import Slider from "./SliderItem";
import { useAppSelector } from '../store/store';
import { SliderState } from '../store/features/sliderSlice';
import SliderItem from './SliderItem';

const Slider = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  padding: 0px 40px;
  margin-bottom: 25px;
`

const Slides = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  transition: all .5s ease;
`

const Title = styled.h5`
  transition: color 0.15s ease-out 0s;
  display: block;
  word-break: break-word;
  font-size: 1.2rem;
  /* font-family: "RakutenSans Bold", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif; */
  font-weight: bold;
  color: rgb(240, 240, 240);
  text-align: left;
  line-height: 28px;
  margin-bottom: 10px;
`

const SliderWrapper:React.FC = () => {
  const sliderBestMovies: SliderState = useAppSelector((state: any) => state.slider);
  const sliderStoreMovies: SliderState = useAppSelector((state: any) => state.slider);
  
  const createSliderBestMoviesItem = () => {
    return (
      sliderBestMovies.movies.map(movie => { 
        return (<SliderItem key={movie.title} movie={movie} category='test'></SliderItem>)
      })
    )
  }

  const createSliderStoreMoviesItem = () => {
    return (
      sliderStoreMovies.movies.map(movie => { 
        return (<SliderItem key={movie.title} movie={movie} category='test'></SliderItem>)
      })
    )
  }

  return (
    <>
      <Slider>
        <Title>GRATIS | La mejor selección de películas gratuitas</Title>
        <Slides>
          {createSliderBestMoviesItem()}
        </Slides>
      </Slider>
      <Slider>
        <Title>GRATIS | La mejor selección de películas gratuitas</Title>
        <Slides>
          {createSliderStoreMoviesItem()}
        </Slides>
      </Slider>
    </>
  )
}

export default SliderWrapper
