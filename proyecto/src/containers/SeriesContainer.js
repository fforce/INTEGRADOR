import React, { Component } from 'react'
import MovieListGrid from '../components/MovieListGrid'
import MovieListItems from '../components/MovieListItems'
import FilterBar from '../components/FilterBar'
import { connect } from "react-redux"
import { loadPopularSeries, showSeriesListItems } from "../actions/movies"
import { getMaxItems } from '../selectors/sharedSelectors'


class SeriesContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

        this.props.loadPopularSeries()
    }

    showListGrid = event =>
    {
        this.props.showSeriesList(false);
    }

    showListItems = event =>
    {
        this.props.showSeriesList(true);
    }


    render() {
        const { series, showSeriesListItems } = this.props;
        return (
            <div className="py-5 bg-light">
                <div className="container">
                    <section className="items-section">
                        <h5 className="items-section-title">Series <a href="">Ver todas</a></h5>
                        <div className="filters-bar">
                            <div className="filters-bar-right">
                                <FilterBar onClickGrid={this.showListGrid} onClickList={this.showListItems}  ></FilterBar>
                            </div>
                        </div>

                        <div className='row'>
                        {!showSeriesListItems ?
                                <MovieListGrid showButtons={false} movies={series} clickDeleteMovie={() => { }}> </MovieListGrid>
                                :
                                <MovieListItems movies={series} showAddButtons={true} clickAddItem={() => { }} clickRemoveItem={() => { }} ></MovieListItems>
                            }      </div>
                    </section>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    series: getMaxItems(state.series.seriesList),
    showSeriesListItems: state.series.showSeriesListItems
})

const mapDispatchToProps = {
    loadPopularSeries: loadPopularSeries,
    showSeriesList: showSeriesListItems
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesContainer)
