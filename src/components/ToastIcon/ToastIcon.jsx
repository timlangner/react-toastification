import React from "react";
import PropTypes from 'prop-types';
import './toastIcon.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/pro-light-svg-icons";

const ToastIcon = ({ type }) => {
    return (
        <div className="icon-wrapper">
            <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
        </div>
    );
};

export default ToastIcon;

ToastIcon.propTypes = {
    type: PropTypes.string.isRequired,
};
