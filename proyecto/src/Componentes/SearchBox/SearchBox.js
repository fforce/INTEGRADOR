import React, { Component } from 'react';
import PropTypes from 'prop-types';



class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: ""
        }
    }
    
    /* como hago para pasar por aca primero?
    handleSubmitSearch = event => {       

        event.preventDefault()
        return ( () => {this.props.submitSearchInput()})
    }*/

    handleChangeTitulo = event => {
        this.setState({ titulo: event.target.value })
    }

    render() {

        return (
            <form onSubmit={this.props.submitSearchInput(this.state.titulo)}>
                <input onChange={this.handleChangeTitulo} className="form-control" type="text" placeholder="Buscar Película o Serie" aria-label="Search" />
            </form>
        );
    }
}

SearchBox.propTypes = {
    submitSearchInput: PropTypes.func, 
};
export default SearchBox;    