import React from 'react';

const MyListViewButton = ({ onClickRemoveButton }) => (
    <a href="peliculas-list.html" onClick={onClickRemoveButton} class="btn btn-primary" aria-label="Profile">
        <i class="mdi mdi-eye-outline" aria-hidden="true"></i>
    </a>
);

export default MyListViewButton;    