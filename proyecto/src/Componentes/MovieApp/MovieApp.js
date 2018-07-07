import React, { Component } from 'react';
import Nav from '../Nav'
import MovieList from '../MovieList'


const moviesSource = [
    {
        title: 'Thor: Ragnarock',
        date: 'Octover 25, 2017',
        imgUrl: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg'
    },
    {
        title: 'Thor: Ragnarock',
        date: 'Octover 25, 2017',
        imgUrl: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg'
    },
    {
        title: 'Thor: Ragnarock',
        date: 'Octover 25, 2017',
        imgUrl: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg'
    },
    {
        title: 'Thor: Ragnarock',
        date: 'Octover 25, 2017',
        imgUrl: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg'
    },
    {
        title: 'Thor: Ragnarock',
        date: 'Octover 25, 2017',
        imgUrl: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg'
    },
    {
        title: 'Thor: Ragnarock',
        date: 'Octover 25, 2017',
        imgUrl: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg'
    },
];

class MovieApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: moviesSource,
            myMovies: []
        }
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <Nav> </Nav>
                <div className="py-5 bg-light">
                    <div className="container">
                        <section className="items-section">
                            <h5 className="items-section-title">Mi Lista <a href="">Ver todas</a></h5>
                            <div className='row'>
                                <MovieList movies={this.state.movies} > </MovieList>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieApp;