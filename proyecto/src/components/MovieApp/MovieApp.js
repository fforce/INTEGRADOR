import React, { Component } from 'react';
import Nav from '../../containers/NavContainer'
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