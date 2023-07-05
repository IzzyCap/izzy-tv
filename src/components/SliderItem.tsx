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
