import React, { Component } from 'react'
import MovieListGrid from '../components/MovieListGrid'
import MovieListItems from '../components/MovieListItems'
import FilterBar from '../components/FilterBar'
import { connect } from "react-redux"
import { loadPopularSeries, showSeriesListItems,  addMyLisItem, hideAlert } from "../actions/movies"
import { getMaxItems } from '../selectors/sharedSelectors'
import AlertDialog from '../components/Shared/AlertDialog'


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

    addListItemMovie = item => event => {
        this.props.addListItem(item);
    }

    closeAlert = () => {
        this.props.handleClose()
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
                                <FilterBar onClickGrid={this.showListGrid} onClickList={this.showListItems} activeLisItems={showSeriesListItems} ></FilterBar>
                            </div>
                        </div>

                        <div className='row'>
                        {!showSeriesListItems ?
                                <MovieListGrid showButtons={false} movies={series} clickDeleteMovie={() => { }}> </MovieListGrid>
                                :
                                <MovieListItems movies={series} showAddButtons={true} clickAddItem={this.addListItemMovie} clickRemoveItem={() => { }} ></MovieListItems>
                            }      </div>
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
    series: getMaxItems(state.series.seriesList),
    showSeriesListItems: state.series.showSeriesListItems,
    open: state.showAlert.open,
    message: state.showAlert.message
})

const mapDispatchToProps = {
    loadPopularSeries: loadPopularSeries,
    showSeriesList: showSeriesListItems,
    addListItem: addMyLisItem,
    handleClose: hideAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesContainer)
