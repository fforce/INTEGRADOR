import React from 'react';
import PropTypes from "prop-types";

const MyListViewButton = ({ onClickRemoveButton }) => (
    <a href='#' onClick={onClickRemoveButton} className="btn btn-primary" aria-label="Profile">
        <i className="mdi mdi-eye-outline" aria-hidden="true"></i> Marcar como vista
    </a>
);

MyListViewButton.propTypes = {
    onClickRemoveButton: PropTypes.func, 
};
export default MyListViewButton;    