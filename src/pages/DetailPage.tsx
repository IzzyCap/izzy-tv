import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

export const DetailPage = () => {
  const { id } = useParams();

  const [movie, setMovie]: any = useState();

  useEffect(() => {
    fetch(`https://justcors.com/tl_1fb6cfc/https://gizmo.rakuten.tv/v3/movies/${id}?classification_id=5&device_identifier=web&locale=es&market_code=es`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, []);

  return (
    <div>
      <h1>{movie?.data.title}</h1>
      <img src={movie?.data.images.artwork}></img>
    </div>
  )
}
