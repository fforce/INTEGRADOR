import React, { Component } from 'react'
import MovieListGrid from '../MovieListGrid'

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


export default Peliculas;