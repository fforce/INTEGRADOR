import React, { Component } from 'react';
import Nav from '../../containers/NavContainer'
import Contenido from "./Contenido"
import { BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'

class MovieApp extends Component {

    render() {
        const { history } = this.props;
        return (
            <ConnectedRouter history={history}>
                <Contenido />
            </ConnectedRouter>
        )
    }
}

export default MovieApp;