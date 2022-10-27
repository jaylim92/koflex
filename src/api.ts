const API_KEY = "bb91f09c6968a47ed4c9d4bf8777a31e"
const BASE_URL ="https://api.themoviedb.org/3"

interface IMovie {
    id: number,
    backdrop_path: string,
    overview: string,
    poster_path: string,
    title: string,
}

export interface IGetMoviesResult {
    dates: {
        maximum: string,
        minimum: string,
    },
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number,
}

export function getMovies(){
    return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`).then(response => response.json())
}