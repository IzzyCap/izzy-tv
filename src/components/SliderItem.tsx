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

const Artwork = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`

interface SliderItemProps {
  movie: Movie;
  category: string;
}

const SliderItem:React.FC<SliderItemProps> = ({movie, category}: SliderItemProps) => {  
  return (
    <Slide>
      <Artwork src={movie.images.artwork}>

      </Artwork>
    </Slide>
  )
}

export default SliderItem;
