import styled from 'styled-components';

const Slide = styled.a`
  scroll-snap-align: start;
  flex-shrink: 0;
  margin: 0px 2px;
  transition: transform 180ms ease-out 0s;
  width: calc(14% - 5px);
  justify-content: center;
  align-items: center;
  top: 0px;
`

const CardContainer = styled.div`
  position: relative;
  transition: transform 0.15s ease-out 0s;
  padding: 69.8738% 0px;
`

const CardSkeleton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: width 180ms ease-out 0s, height 180ms ease-out 0s;
  background: rgb(51, 51, 51);
  width: 100%;
  height: 100%;
  /* &:hover {
    background: linear-gradient(rgb(0, 0, 0) 50%, rgb(33, 33, 33) 100%);
    width: 336px;
    height: 470px;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 50px 16px;
    z-index: 50;
    overflow: auto;
    transform: translate(-50%, -50%);
    margin: -50%;
  } */
`

const CardImage = styled.img`
  width: 100%;
  transform: scale(1);
  position: absolute;
  top: 0px;
  left: 0px;
  transition: opacity 180ms ease-out 0s, transform 0.15s ease-out 0s;
  opacity: 1;
  height: 100%;
`

interface SliderItemProps {
  movie: Movie;
  category: string;
}

const SliderItem:React.FC<SliderItemProps> = ({movie, category}: SliderItemProps) => {
  console.log(movie);
  return (
    <>
      <Slide href={`/details/${movie.id}`}>
        <CardContainer>
          <CardSkeleton>
            <CardImage src={movie.images.artwork}></CardImage>
          </CardSkeleton>
        </CardContainer>
      </Slide>
    </>
  )
}

export default SliderItem;
