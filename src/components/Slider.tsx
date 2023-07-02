import styled from 'styled-components';
import { SliderState } from '../store/features/sliderSlice';
import { useAppSelector } from '../store/store';
import SliderItem from './SliderItem';

const SliderContainer = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  padding: 0px 0px 0px 40px;
  margin-bottom: 25px;
`

const Slides = styled.div`
  width: 100%;
  display: flex;
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

// [TODO] merge Prev and Next
const Prev = styled.div`
  position: absolute;
  background: linear-gradient(to left, transparent 0%, rgb(16, 16, 16) 90%);
  bottom: 0px;
  left: 0;
  width: 40px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    transition: 0.3s;
    background: linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 100%);
    opacity: 0;
    position: relative;
    top: calc(50% + 10px);
    transform: translateY(-50%)
  }
  &:hover { 
    img {
      opacity: 1;
    }
  }
`

const Next = styled.div`
  position: absolute;
  background: linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 100%);
  bottom: 0px;
  right: 0;
  width: 40px;
  height: 100%;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    transition: 0.3s;
    background: linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 100%);
    opacity: 0;
    position: relative;
    top: calc(50% + 10px);
    transform: translateY(-50%)
  }
  &:hover { 
    img {
      opacity: 1;
    }
  }
`

interface SliderProps {
  title: string;
  stateID: string;
}

const Slider:React.FC<SliderProps> = ({title, stateID}: SliderProps) => {  
  const slider: SliderState = useAppSelector((state: any) => state[stateID]);
  slider.nextPage();
  slider.nextPage();
  slider.nextPage();
  slider.nextPage();
  
  const createSliderItems = () => {
    return (
      slider.movies.map(movie => { 
        return (<SliderItem key={movie.title} movie={movie} category='test'></SliderItem>)
      })
    )
  }

  return (
    <SliderContainer>
      <Title>{title}</Title>
      <Prev>
        <img src='/icons/left-arrow.svg'/>
      </Prev>
      <Next>
        <img src='/icons/right-arrow.svg'/>
      </Next>
      <Slides>
        {createSliderItems()}
      </Slides>
    </SliderContainer>
  )
}

export default Slider;
