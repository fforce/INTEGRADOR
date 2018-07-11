import React from 'react';
import PropTypes from "prop-types";

const MyListAddButton = ({ onClickAddButton }) => (
    <a href="peliculas-list.html" onClick={onClickAddButton} className="btn btn-primary" aria-label="Profile">
        <i className="mdi mdi-heart-outline" aria-hidden="true"></i> Agregar a Mi Lista
    </a>
);

MyListAddButton.propTypes = {

    onClickAddButton: PropTypes.func,
  
};

export default MyListAddButton;    