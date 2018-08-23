import React, { Component } from 'react'
import MovieListGrid from '../components/MovieListGrid'
import { connect } from "react-redux"
import { loadPopularSeries } from "../actions/movies"
import { getMaxItems } from '../selectors/sharedSelectors'


class SeriesContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

        this.props.loadPopularSeries()
    }

    render() {
        const { series } = this.props;
        return (
            <div className="py-5 bg-light">
                <div className="container">
                    <section className="items-section">
                        <h5 className="items-section-title">Peliculas <a href="">Ver todas</a></h5>
                        <div className='row'>
                            <MovieListGrid showButtons={false} movies={series} clickDeleteMovie={() => { }}> </MovieListGrid>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    series: getMaxItems(state.series.seriesList) 
})

const mapDispatchToProps = {
    loadPopularSeries: loadPopularSeries
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesContainer)
