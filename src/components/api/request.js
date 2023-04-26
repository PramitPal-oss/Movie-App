export const APIKEY = process.env.REACT_APP_API_KEY;
export const BASE_URL = `https://api.themoviedb.org/3`;
export const Image_URL = `https://image.tmdb.org/t/p/original`;
export const apiKey = `api_key=${process.env.REACT_APP_API_KEY}`;
export const baseUrl = `https://api.themoviedb.org/3`;
export const imageUrl = `https://image.tmdb.org/t/p/w500`;
export const imageUrlOrginal = `https://image.tmdb.org/t/p/original`;

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${APIKEY}&with_genres=28&page=1`,
  fetchComedYMOvies: `${BASE_URL}/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${APIKEY}&with_genres=99`,
  fetchAdventureMovies: `${BASE_URL}/discover/movie?api_key=${APIKEY}&with_genres=12`,
  fetchAnimationMovies: `${BASE_URL}/discover/movie?api_key=${APIKEY}&with_genres=16`,
  fetchCrimeMovies: `${BASE_URL}/discover/movie?api_key=${APIKEY}&with_genres=80`,
  fetchDrama: `${BASE_URL}/discover/movie?api_key=${APIKEY}&with_genres=18`,
  fetchFamilyMovies: `${BASE_URL}/discover/movie?api_key=${APIKEY}&with_genres=10751`,
  fetchFantasyMovies: `${BASE_URL}/discover/movie?api_key=${APIKEY}&with_genres=14`,
  fetchTvShows: `${BASE_URL}/tv/popular?api_key=${APIKEY}&language=en-US&page=2`,
};

export default requests;
