import React from 'react';

const MyListRemoveButton = ({ onClickRemoveButton }) => (
    <a href="#" onClick={onClickRemoveButton} className="btn btn-primary" aria-label="Profile">
        <i className="mdi mdi-delete" aria-hidden="true"></i> Quitar
    </a>
);

export default MyListRemoveButton;    