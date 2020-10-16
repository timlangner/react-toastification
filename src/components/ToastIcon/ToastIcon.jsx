import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import './toastIcon.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCheckCircle, faExclamationCircle, faTimesCircle } from "@fortawesome/pro-light-svg-icons";

const ToastIcon = ({ type }) => {
    const [iconType, setIconType] = useState(faInfoCircle);

    useEffect(() => {
        switch (type) {
            case "info":
                setIconType(faInfoCircle);
                break;
            case "success":
                setIconType(faCheckCircle);
                break;
            case "warning":
                setIconType(faExclamationCircle);
                break;
            case "error":
                setIconType(faTimesCircle);
                break;
            default:
                setIconType(faInfoCircle);
        }
    }, []);

    return (
        <div className="icon-wrapper">
            <FontAwesomeIcon icon={iconType} className="icon"/>
        </div>
    );
};

export default ToastIcon;

ToastIcon.propTypes = {
    type: PropTypes.string.isRequired,
};
