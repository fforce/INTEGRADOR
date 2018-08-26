import React, { Component } from 'react'
import MovieListGrid from '../components/MovieListGrid'
import { connect } from "react-redux"
import { loadPopularMovies, showMoviesListITems, addMyLisItem, hideAlert } from "../actions/movies"
import { getMaxItems } from '../selectors/sharedSelectors'
import FilterBar from '../components/FilterBar'
import MovieListItems from '../components/MovieListItems'
import AlertDialog from '../components/Shared/AlertDialog'


class Peliculas extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.loadPopularMovies()
    }

    showListGrid = event => {
        this.props.showMoviesList(false);
    }

    showListItems = event => {
        this.props.showMoviesList(true);
    }

    addListItemMovie = item => event => {
        this.props.addListItem(item);
    }

    closeAlert = () => {
        this.props.handleClose()
    }

    render() {
        const { peliculas, showMoviesListItems } = this.props;

        return (
            <div className="py-5 bg-light">
                <div className="container">
                    <section className="items-section">
                        <h5 className="items-section-title">Peliculas a <a href="">Ver todas</a></h5>

                        <div className="filters-bar">

                            <div className="filters-bar-right">
                                <FilterBar onClickGrid={this.showListGrid} onClickList={this.showListItems} activeLisItems={showMoviesListItems}  ></FilterBar>
                            </div>
                        </div>

                        <div className='row'>
                            {!showMoviesListItems ?
                                <MovieListGrid showButtons={false} movies={peliculas} clickDeleteMovie={() => { }}> </MovieListGrid>
                                :
                                <MovieListItems movies={peliculas} showAddButtons={true} clickAddItem={this.addListItemMovie} clickRemoveItem={() => { }} ></MovieListItems>
                            }
                        </div>
                    </section>
                </div>
                <AlertDialog
                    open={this.props.open}
                    message={this.props.message}
                    handleClose={this.closeAlert}>
                </AlertDialog>
            </div>

        )
    }
}


const mapStateToProps = (state) => ({
    peliculas: getMaxItems(state.movies.movieList),
    showMoviesListItems: state.movies.showMoviesListItems,
    open: state.showAlert.open,
    message: state.showAlert.message
})

const mapDispatchToProps = {
    loadPopularMovies: loadPopularMovies,
    showMoviesList: showMoviesListITems,
    addListItem: addMyLisItem,
    handleClose: hideAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Peliculas)
