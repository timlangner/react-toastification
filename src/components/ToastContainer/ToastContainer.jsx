import PropTypes from 'prop-types';
import React from "react";
import CloseButton from "../CloseButton/CloseButton";
import ToastIcon from "../ToastIcon/ToastIcon";
import ToastMessage from "../ToastMessage/ToastMessage";
import './toastContainer.scss';

const ToastContainer = ({ type, message, setToastOut }) => {

    return (
        <div className={`toast-container ${type}`}>
            <div className="content-wrapper">
                <div className="status-wrapper">
                    <ToastIcon type={type} />
                    <ToastMessage message={message} />
                </div>
                <CloseButton setToastOut={setToastOut} />
            </div>
        </div>
    );
};

export default ToastContainer;

ToastContainer.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    setToastOut: PropTypes.func.isRequired
};
