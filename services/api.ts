export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

// export const fetchMovies = async({query}: {query:string})=>{

// }

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTAyYjdmODY1Y2Y5YzE2MGU0MDA2ZTA5MWQ3ZTJjMSIsIm5iZiI6MTU3MTU4MTE3NC4yODksInN1YiI6IjVkYWM2Y2Y2ZWQyOGI5MDAxN2RiNTM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m7TiKqrVZ_Fajykm7zhoGRx3j8YxI9C6_pdl4gk4S3o'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));
