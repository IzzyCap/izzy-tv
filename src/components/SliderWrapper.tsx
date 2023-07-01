import styled from 'styled-components';
import { sendRequest } from '../request';
import Slider from "./Slider";
import { useEffect, useState } from 'react';


const Wrapper = styled.div`
  display: block;
`

// [TODO] change component name
const SliderWrapper:React.FC = () => {
  const [slider, setSlider] = useState<Movie[]>([]);

  useEffect(() => {
    sendRequest('gratis-la-mejor-seleccion-de-peliculas')
      .then((json: any) => {
        setSlider(json.data.contents.data as Movie[]);
      });
  }, []);

  return (
    <Wrapper>
      <h1>Wrapper</h1>
      <Slider category="gratis-la-mejor-seleccion-de-peliculas"/>
      {slider.map(movie => { return (<h1 key={movie.title} >{movie.title}</h1>)})}
    </Wrapper>
  )
}

export default SliderWrapper
