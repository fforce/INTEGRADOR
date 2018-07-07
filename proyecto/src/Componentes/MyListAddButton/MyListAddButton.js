import React from 'react';

const MyListAddButton = ({ onClickAddButton }) => (
    <a href="peliculas-list.html" onClick={onClickAddButton} className="btn btn-primary" aria-label="Profile">
        <i className="mdi mdi-heart-outline" aria-hidden="true"></i> Agregar a Mi Lista
    </a>
);

export default MyListAddButton;    