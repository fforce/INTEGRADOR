import axios from 'axios'

const imgPath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
const api_key = '17e23cd741442971b79014095105b349'

class MovieApi {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://api.themoviedb.org/3/',
            params: {
                api_key :api_key,
                headers: { "Access-Control-Allow-Origin": "*" },
            },
        })
    }

    getMoviesPopulars = () => {
        return this.axios.get(`movie/popular?language=en-US&page=1`).then(response => {
            const comics = response.data.results.map((item) => (
                {
                    title: item.title,
                    date: item.release_date,
                    imgUrl: imgPath + item.poster_path,               
                }
            ))
            debugger
            return comics;
        })
    }
}

export default MovieApi
