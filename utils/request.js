const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "top rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
  },
  fetchHorrorMovies: {
    title: "horror",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
  },
  fetchRomanceMovies: {
    title: "romance",
    url: `/discover/movie?api_key=7ee8353ee99349e4763fac695eeb02dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`,
  },
  fetchMystery: {
    title: "mystery",
    url: `/discover/movie?api_key=7ee8353ee99349e4763fac695eeb02dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648&with_watch_monetization_types=flatrate`,
  },
  fetchSciFi: {
    title: "sci-fi",
    url: `/discover/movie?api_key=7ee8353ee99349e4763fac695eeb02dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate`,
  },
  fetchWestern: {
    title: "western",
    url: `/discover/movie?api_key=7ee8353ee99349e4763fac695eeb02dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=37&with_watch_monetization_types=flatrate`,
  },
  fetchAnimation: {
    title: "animation",
    url: `/discover/movie?api_key=7ee8353ee99349e4763fac695eeb02dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`,
  },
  fetchTv: {
    title: "TV movie",
    url: `/discover/movie?api_key=7ee8353ee99349e4763fac695eeb02dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10770&with_watch_monetization_types=flatrate`,
  },
};
