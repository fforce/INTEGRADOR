import React from 'react';

const MyListRemoveButton = ({ onClickRemoveButton }) => (
    <a href="peliculas-list.html" className="btn btn-primary" onClick={onClickRemoveButton} aria-label="Profile">
        <i className="mdi mdi-delete" aria-hidden="true"></i>
    </a>
);

export default MyListRemoveButton;    