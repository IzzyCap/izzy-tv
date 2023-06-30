import styled from 'styled-components';

interface ListProps {
  category: string;
}

const List:React.FC<ListProps> = ({category}: ListProps) => {
  const url = 'https://gizmo.rakuten.tv/v3/lists/';
  const parameters = '?classification_id=5&device_identifier=web&locale=es&market_code=es'
  // [TODO] save url on a parameter
  const fetchMoviesHandler = () => {
    fetch(url + category + parameters)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  fetchMoviesHandler();

  return (
    <>
    </>
  )
}

export default List
