import React, { Component } from 'react';
import Nav from '../Nav'
import GridItem from '../GridItem'



class MovieApp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {

        return (
            <div>
                <Nav> </Nav>
                <GridItem title="hola" date="10222" />
            </div>
        )
    }
}

export default MovieApp;