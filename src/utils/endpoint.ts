// As a temporal fix adding cors proxy from (https://justcors.com/) to avoid cors error
const proxyPrefix: string = "https://justcors.com/tl_8852931/";
const url: string = "https://gizmo.rakuten.tv/";

const listPath: string = "v3/lists/";
const moviesPath: string = "v3/movies/";
const trailerPath: string = "v3/me/streamings";

const urlParameters: string =
  "?classification_id=5&device_identifier=web&locale=es&market_code=es";

export enum Categories {
  Best = "gratis-la-mejor-seleccion-de-peliculas",
  Store = "tienda-las-peliculas-del-momento",
  Original = "rakuten-originals-movies",
  Action = "gratis-peliculas-de-accion",
  Drama = "gratis-peliculas-de-drama",
  Suspense = "gratis-peliculas-de-suspense",
  Family = "gratis-peliculas-familiares",
}

export const createCategoryEndpoint = (category: Categories): string => {
  return `${proxyPrefix}${url}${listPath}${category}${urlParameters}`;
};

export const createMovieEndpoint = (id: string): string => {
  return `${proxyPrefix}${url}${moviesPath}${id}${urlParameters}`;
};

export const fetchMovie = (id: string): Promise<Response> => {
  const fetchUrl = createMovieEndpoint(id);

  return fetch(fetchUrl);
};

export const fetchTrailer = (id: string): Promise<Response> => {
  const fetchUrl = `${proxyPrefix}${url}${trailerPath}${urlParameters}`;

  const data = {
    audio_language: "SPA",
    audio_quality: "2.0",
    content_id: id,
    content_type: "movies",
    device_serial: "device_serial_1",
    device_stream_video_quality: "FHD",
    player: "web:PD-NONE",
    subtitle_language: "MIS",
    video_type: "trailer",
  };

  return fetch(fetchUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
