import React from "react";
import './toastContainer.scss';
import {Icon} from "@material-ui/core";
import PropTypes from 'prop-types';

const ToastContainer = ({ type = "success", message="This is a success message!" }) => {
    return (
        <div className="toast-container">
            <div className="content-wrapper">
                <div className="text-wrapper">
                    <div className="message">{message}</div>
                </div>
            </div>
        </div>
    );
};

export default ToastContainer;

ToastContainer.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string
};
