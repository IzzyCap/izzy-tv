import React from 'react';
import Slider from '../components/Slider';
import { Categories } from '../helpers/endpoint';

export const HomePage = () => {
  return (
    <>
      <Slider title='GRATIS | La mejor selección de películas gratuitas' category={Categories.Best}/>
      <Slider title='TIENDA | Las películas del momento en compra o alquiler' category={Categories.Store}/>
      <Slider title='GRATIS | Rakuten Originals' category={Categories.Original}/>
      <Slider title='GRATIS | Películas de acción gratis' category={Categories.Action}/>
      <Slider title='GRATIS | Películas de drama gratis' category={Categories.Drama}/>
      <Slider title='GRATIS | Películas de suspense gratis' category={Categories.Suspense}/>
      <Slider title='GRATIS | Películas familiares gratis' category={Categories.Family}/>
    </>
  )
}
