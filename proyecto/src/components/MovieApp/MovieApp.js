import React, { Component } from 'react';
import Contenido from "./Contenido"
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