import React from "react";
import PropTypes from 'prop-types';
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
