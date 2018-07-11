import React from 'react';
import PropTypes from "prop-types";

const MyListRemoveButton = ({ onClickRemoveButton }) => (
    <a href="#" onClick={onClickRemoveButton} className="btn btn-primary" aria-label="Profile">
        <i className="mdi mdi-delete" aria-hidden="true"></i> Quitar
    </a>
);

MyListRemoveButton.propTypes = {
    onClickRemoveButton: PropTypes.func, 
};

export default MyListRemoveButton;    