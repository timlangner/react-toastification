import React from "react";
import ToastMessage from "../ToastMessage/ToastMessage";
import ToastIcon from "../ToastIcon/ToastIcon";
import PropTypes from 'prop-types';
import './toastContainer.scss';
import CloseButton from "../CloseButton/CloseButton";

const ToastContainer = ({ type, message }) => {
    return (
        <div className="toast-container">
            <div className="content-wrapper">
                <div className="status-wrapper">
                    <ToastIcon type={type} />
                    <ToastMessage message={message} />
                </div>
                <CloseButton />
            </div>
        </div>
    );
};

export default ToastContainer;

ToastContainer.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};
