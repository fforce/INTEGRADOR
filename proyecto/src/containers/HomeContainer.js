import React, { Component } from 'react'
import MovieListGrid from '../components/MovieListGrid'
import { connect } from "react-redux"
import { loadPopularMovies, loadPopularSeries } from "../actions/movies"
import { getMaxItems } from '../selectors/sharedSelectors'


class HomeContainer extends Component {

    componentDidMount() {

        this.props.loadPopularMovies();
        this.props.loadPopularSeries();
    }

    render() {
        const { peliculas, series } = this.props;
        return (
            <div className="py-5 bg-light">
                <div className="container">
                    <section className="items-section">
                        <h5 className="items-section-title">Peliculas <a href='#'>Ver todas</a></h5>
                        <div className='row'>
                            <MovieListGrid showButtons={false} movies={peliculas} clickDeleteMovie={() => { }}> </MovieListGrid>
                        </div>
                    </section>
                    <section className="items-section">
                        <h5 className="items-section-title">Serires <a href='#'>Ver todas</a></h5>
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
    peliculas: getMaxItems(state.movies.movieList),
    series: getMaxItems(state.series.seriesList)
})

//esta es la forma mas cool el motor se encarga de ejecutar
//le paso un objeto literal
const mapDispatchToProps = {
    loadPopularMovies: loadPopularMovies,
    loadPopularSeries: loadPopularSeries
}



///esta es una forma mas clara de ver
/*const mapDispatchsToProps = (dispatch) => ({
     onChangeDraft: value => dispatch({
       type: CHANGE_DRAFT,
       draft: value
     }),
     submitForm:value => dispatch({
      type: SET_LOGUIN_STATUS,
      login: value
    })
    //onchangedraft es el evento prop de mi componente entonces lo tengo q dispachar
    //onChangeDraft: value => dispatch(draft(value)) // me atiende mas facil
})*/

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
