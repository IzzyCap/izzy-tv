import { Categories } from '../helpers/endpoint';
import Slider from './Slider';

const SliderWrapper:React.FC = () => {
  return (
    <>
      <Slider title='GRATIS | La mejor selección de películas gratuitas' category={Categories.Best}/>
      <Slider title='TIENDA | Las películas del momento en compra o alquiler' category={Categories.Store}/>
      <Slider title='GRATIS | Rakuten Originals' category={Categories.Original}/>
    </>
  )
}

export default SliderWrapper
