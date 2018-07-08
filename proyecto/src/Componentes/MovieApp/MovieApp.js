import React, { Component } from 'react';
import Nav from '../Nav'
import MovieListGrid from '../MovieListGrid'
import MovieListItems from '../MovieListItems'
import FilterBar from '../FilterBar'


const moviesSource = [
    {
        title: 'Thor: Ragnarock',
        date: 'Octover 25, 2017',
        imgUrl: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Aliquam blanditiis consequuntur corporis distinctio doloremque, 
        eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!`,

    },
    {
        title: 'Thor: Ragnarock',
        date: 'Octover 25, 2017',
        imgUrl: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Aliquam blanditiis consequuntur corporis distinctio doloremque, 
        eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!`,

    },
    {
        title: 'Thor: Ragnarock',
        date: 'Octover 25, 2017',
        imgUrl: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Aliquam blanditiis consequuntur corporis distinctio doloremque, 
        eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!`,
    },
    {
        title: 'Thor: Ragnarock',
        date: 'Octover 25, 2017',
        imgUrl: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Aliquam blanditiis consequuntur corporis distinctio doloremque, 
        eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!`,

    },
    {
        title: 'Thor: Ragnarock',
        date: 'Octover 25, 2017',
        imgUrl: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Aliquam blanditiis consequuntur corporis distinctio doloremque, 
        eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!`,

    },
    {
        title: 'Thor: Ragnarock',
        date: 'Octover 25, 2017',
        imgUrl: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Aliquam blanditiis consequuntur corporis distinctio doloremque, 
        eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!`,

    },
];

class MovieApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: moviesSource,
            myMovies: [],
            detalle: {},
            showGridPeliculas: true,
            showGridMisPeliculas: true

        }
    }

    componentDidMount() {
    }

    handleOnClickGrid = () => event => {	
        this.setState({
            showGridPeliculas: true
        });
    }
    
    handleOnClickList = () => event => {
	
        this.setState({
            showGridPeliculas: false
        });
    }
    
    handleOnClickGridMis = () => event => {	
        this.setState({
            showGridMisPeliculas: true
        });
    }
    
    handleOnClickListMis = () => event => {
	
        this.setState({
            showGridMisPeliculas: false
        });
	}

    render() {

        return (
            <div>
                <Nav> </Nav>
                <div className="py-5 bg-light">
                    <div className="container">
                        <section className="items-section">
                            <h5 className="items-section-title">Peliculas <a href="">Ver todas</a></h5>
                            <FilterBar onClickGrid={this.handleOnClickGrid()} onClickList={this.handleOnClickList()} />
                            {
                                this.state.showGridPeliculas ? (
                                    <div className='row'>
                                        <MovieListGrid showButtons={false} movies={this.state.movies} > </MovieListGrid>
                                    </div>
                                ) :
                                    (
                                        <div className='row'>
                                            <MovieListItems showAddButtons={true} movies={this.state.movies} > </MovieListItems>
                                        </div>
                                    )
                            }
                            <h5 className="items-section-title">Mis Peliculas <a href="">Ver todas</a></h5>
                            
                            <FilterBar onClickGrid={this.handleOnClickGridMis()} onClickList={this.handleOnClickListMis()} />

                            {
                                this.state.showGridMisPeliculas ? (
                                    <div className='row'>
                                        <MovieListGrid showButtons={true} movies={this.state.movies} > </MovieListGrid>
                                    </div>) :
                                    (
                                        <div className='row'>
                                            <MovieListItems showAddButtons={false} movies={this.state.movies} > </MovieListItems>
                                        </div>
                                    )
                            }
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieApp;