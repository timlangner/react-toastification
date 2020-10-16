import PropTypes from 'prop-types';
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-light-svg-icons";
import './closeButton.scss';

const CloseButton = ({ setToastOut }) => {

    return (
        <div className="button-wrapper">
            <FontAwesomeIcon icon={faTimes} className="button" onClick={() => {
                setToastOut(true);
            }}/>
        </div>
    );
};

export default CloseButton;

CloseButton.propTypes = {
    setToastOut: PropTypes.func.isRequired
};

