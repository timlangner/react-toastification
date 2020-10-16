import PropTypes from 'prop-types';
import React from "react";
import './toastMessage.scss';

const ToastMessage = ({ message }) => {
    return (
        <div className="message">{message}</div>
    );
};

export default ToastMessage;

ToastMessage.propTypes = {
    message: PropTypes.string.isRequired
};
