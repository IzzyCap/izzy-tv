// As a temporal fix adding cors proxy from (https://justcors.com/) to avoid cors error
const proxyPrefix: string = 'https://justcors.com/tl_4aa3c46/';
const url: string = 'https://gizmo.rakuten.tv/v3/lists/';

const categories: string[] = [
  'gratis-la-mejor-seleccion-de-peliculas'
];

const urlParameters: string = '?classification_id=5&device_identifier=web&locale=es&market_code=es';

export const sendRequest = (category: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(`${proxyPrefix}${url}${category}${urlParameters}`)
      .then((res) => res.json())
      .then(json => resolve(json))
      .catch((err) => reject(err));
  });
} 
