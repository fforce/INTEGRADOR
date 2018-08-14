import React, { Component } from 'react'
import MovieListGrid from '../components/MovieListGrid'
import { connect } from "react-redux"
import { loadPopularMovies } from "../actions/movies"
import { getMaxItems } from '../selectors/sharedSelectors'


class Peliculas extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

        this.props.loadPopularMovies()
    }

    render() {
        const { peliculas } = this.props;
        return (
            <div className="py-5 bg-light">
                <div className="container">
                    <section className="items-section">
                        <h5 className="items-section-title">Peliculas <a href="">Ver todas</a></h5>
                        <div className='row'>
                            <MovieListGrid showButtons={false} movies={peliculas} clickDeleteMovie={() => { }}> </MovieListGrid>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    peliculas: getMaxItems(state.movies) 
})

const mapDispatchToProps = {
    loadPopularMovies: loadPopularMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Peliculas)
