import MovieDetails from "./app/movies/[id]";

export const TMBD_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({ query } : {query: string}) => {
    const endpoint = query 
    ?`${TMBD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    :`${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;



    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMBD_CONFIG.headers,
    });
    if(!response.ok){
        // @ts-ignore
        throw new Error('Failed to fetch movies', response.statusText);
    }
    const data = await response.json();
    console.log('Fetched movies:', MovieDetails, data);
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGIyZmIxODFjNWZiNWZkMTQ1M2YzNzJkMWUzNmY2ZSIsIm5iZiI6MTc1MDg3NjA2NS4yNzksInN1YiI6IjY4NWMzZmExYjA2ZTdkMGQyNmFlZTcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UTl6sCE8UHc0l3Qyu3KyLYJPVAE0TEleM8cif2jkt3I'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));