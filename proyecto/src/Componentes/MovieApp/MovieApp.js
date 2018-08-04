import React, { Component } from 'react';
import Nav from '../Nav'
import MovieListGrid from '../MovieListGrid'
import MovieListItems from '../MovieListItems'
import FilterBar from '../FilterBar'
import MovieApi from "../../API/MovieApi"
import Contenido from "./Contenido"
import { BrowserRouter } from "react-router-dom";




class MovieApp extends Component {

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Nav></Nav>
                    <Contenido />
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default MovieApp;