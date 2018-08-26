import React, { Component } from 'react'
import MovieListGrid from '../components/MovieListGrid'
import { connect } from "react-redux"
import { loadPopularMovies, showMoviesListITems } from "../actions/movies"
import { getMaxItems } from '../selectors/sharedSelectors'
import FilterBar from '../components/FilterBar'
import MovieListItems from '../components/MovieListItems'


class MiListaContainer extends Component {

    constructor(props) {
        super(props)
    }  

    showListGrid = event =>
    {
        this.props.showMoviesList(false);
    }

    showListItems = event =>
    {
        this.props.showMoviesList(true);
    }

    render() {
        const { peliculas, showMoviesListItems } = this.props;

        return (
            <div className="py-5 bg-light">
                <div className="container">
                    <section className="items-section">
                        <h5 className="items-section-title">Peliculas <a href="">Ver todas</a></h5>

                        <div className="filters-bar">

                            <div className="filters-bar-right">
                                <FilterBar onClickGrid={this.showListGrid} onClickList={this.showListItems}  ></FilterBar>
                            </div>
                        </div>

                        <div className='row'>
                            {!showMoviesListItems ?
                                <MovieListGrid showButtons={false} movies={peliculas} clickDeleteMovie={() => { }}> </MovieListGrid>
                                :
                                <MovieListItems movies={peliculas} showAddButtons={false} clickAddItem={() => { }} clickRemoveItem={() => { }} ></MovieListItems>
                            }
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    peliculas: state.myList.movieList,
    showMoviesListItems: state.movies.showMoviesListItems
})

const mapDispatchToProps = {
    showMoviesList: showMoviesListITems
}

export default connect(mapStateToProps, mapDispatchToProps)(MiListaContainer)
