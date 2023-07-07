import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled component for the slide item, a link to the movie details page
const Slide = styled(Link)`
  scroll-snap-align: start;
  flex-shrink: 0;
  margin: 0px 2px;
  transition: transform 180ms ease-out 0s;
  width: calc(14% - 5px);
  justify-content: center;
  align-items: center;
  top: 0px;
`;

// Styled component for the container of the card
const CardContainer = styled.div`
  position: relative;
  transition: transform 0.15s ease-out 0s;
  padding: 69.8738% 0px;
`;

// Styled component for the skeleton of the card
const CardSkeleton = styled.div`
  position: absolute;
  background-origin: content-box;
  padding: 6px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: width 180ms ease-out 0s, height 180ms ease-out 0s;
  background: rgb(51, 51, 51);
  background-clip: content-box;
  width: 100%;
  height: 100%;
  &:hover {
    background: transparent;
  }
`;

// Styled component for the image of the card
const CardImage = styled.img`
  width: 100%;
  margin: 5px;
  transform: scale(1);
  position: absolute;
  top: 0px;
  left: 0px;
  transition: opacity 180ms ease-out 0s, transform 0.15s ease-out 0s;
  opacity: 1;
  height: 100%;
  z-index: 100;
  &:hover {
    top: -5px;
    transition: 0.5s;
    -webkit-filter: saturate(1.5);
    filter: saturate(1.5);
  }
`;

interface SliderItemProps {
  movie: Movie;
  category: string;
}

const SliderItem: React.FC<SliderItemProps> = ({
  movie,
  category,
}: SliderItemProps) => {
  return (
    <>
      <Slide to={`/details/${movie.id}`} data-test-id="slider-item">
        <CardContainer>
          <CardSkeleton>
            <CardImage
              src={movie.images.artwork.replace(
                ".jpeg",
                "-width317-quality60.jpeg"
              )}
              loading="lazy"
            ></CardImage>
          </CardSkeleton>
        </CardContainer>
      </Slide>
    </>
  );
};

export default SliderItem;
