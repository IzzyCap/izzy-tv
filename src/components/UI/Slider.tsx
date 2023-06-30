import styled from 'styled-components';
import { proxyPrefix,  } from '../../request/constants';
import { sendRequest } from '../../request';

interface SliderProps {
  category: string;
}


const Slider:React.FC<SliderProps> = ({category}: SliderProps) => {
  // [TODO] save url on a parameter
  const fetchMoviesHandler = () => {
    // fetch('https://justcors.com/tl_95efa64/https://gizmo.rakuten.tv/v3/lists/gratis-la-mejor-seleccion-de-peliculas?classification_id=5&device_identifier=web&locale=es&market_code=es')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //   })

    sendRequest('gratis-la-mejor-seleccion-de-peliculas')
      .then((json) => {
        console.log(json);
      });

    const jsonString = '{"amount_of_votes": 50000, "formatted_amount_of_votes": "50K", "score": 3.8}';
    
    // Parse the JSON and cast it to the Score interface
    const highlightedScore: Score = JSON.parse(jsonString, (key, value) => {
      if (key === 'amount_of_votes') return 'amountOfVotes';
      if (key === 'formatted_amount_of_votes') return 'formattedAmountOfVotes';
      return value;
    });
    
    // Test
    console.log(highlightedScore);
  }

  fetchMoviesHandler();

  return (
    <>
    </>
  )
}

export default Slider;
