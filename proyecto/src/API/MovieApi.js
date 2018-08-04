import axios from 'axios'

const imgPath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";
const api_key = '17e23cd741442971b79014095105b349'

class MovieApi {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://api.themoviedb.org/3/',
            params: {
                headers: { "Access-Control-Allow-Origin": "*" },
            },
        })
    }


    getMoviesPopulars = () => {
        return this.axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`).then(response => {
            console.log(response)
            return response;
        })
    }   
}

export default MovieApi
