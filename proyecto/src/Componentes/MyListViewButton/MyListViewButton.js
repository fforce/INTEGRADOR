import React from 'react';

const MyListViewButton = ({ onClickRemoveButton }) => (
    <a href="#" onClick={onClickRemoveButton} className="btn btn-primary" aria-label="Profile">
        <i className="mdi mdi-eye-outline" aria-hidden="true"></i> Marcar como vista
    </a>
);

export default MyListViewButton;    