// As a temporal fix adding cors proxy from (https://justcors.com/) to avoid cors error
const proxyPrefix: string = 'https://justcors.com/tl_1fb6cfc/';
const url: string = 'https://gizmo.rakuten.tv/v3/lists/';

const urlParameters: string = '?classification_id=5&device_identifier=web&locale=es&market_code=es';

export const endpoint = {
  proxyPrefix,
  url,
  urlParameters
};

export enum Categories {
  Best = 'gratis-la-mejor-seleccion-de-peliculas',
  Store = 'tienda-las-peliculas-del-momento',
  Original = 'rakuten-originals-movies',
  Action = 'gratis-peliculas-de-accion',
  Drama = 'gratis-peliculas-de-drama',
  Suspense = 'gratis-peliculas-de-suspense',
  Family = 'gratis-peliculas-familiares',
};

export const createEndpoint = (category: Categories) => {
  return `${proxyPrefix}${endpoint.url}${category}${urlParameters}`;
}
