import React from 'react';
import SearchBox from '../SearchBox'
import PropTypes from "prop-types";

const Nav = ({ submitSearch }) => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">React Movie DB APP</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="peliculas-grid.html">Peliculas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="series-grid.html">Series</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="mi-lista-grid.html">Mi Lista <span className="badge badge-danger">3</span></a>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-md-0" action="busqueda-peliculas-grid.html">
                        <SearchBox submitSearchInput={submitSearch} />
                    </div>
                </div>
            </div>
        </nav>
    </header>
);

Nav.propTypes = {
    submitSearch: PropTypes.func, 
};

export default Nav;