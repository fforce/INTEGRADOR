import React from 'react';
import SearchBox from '../SearchBox'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

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
                        <li className="nav-item">
                            <Link to='/' exact={true} className='nav-link' activeClassName='active'  >Home  </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/peliculas' className='nav-link' activeClassName='active' >Peliculas  </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/series' className='nav-link' activeClassName='active' > Series  </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/milista' className='nav-link items-milista' activeClassName='active' >Mi lista</Link>
                            <span class="badge badge-danger">3</span>
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