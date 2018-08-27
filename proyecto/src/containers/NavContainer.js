import React, { Component } from 'react'
import { connect } from "react-redux"
import Nav from '../components/Nav'

class NavContainer extends Component {   

    render() {
        return (
            <Nav counter={this.props.counter} ></Nav>
        )
    }
}


const mapStateToProps = (state) => ({
   counter : state.myList.movieList.length
})


export default connect(mapStateToProps)(NavContainer)
