import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <form>
                <input className="form-control" type="text" placeholder="Buscar Película o Serie" aria-label="Search" />
            </form>
        );
    }
}
export default SearchBox;    