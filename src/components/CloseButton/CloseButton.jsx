import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-light-svg-icons";
import PropTypes from 'prop-types';
import './closeButton.scss';

const CloseButton = ({ setShowToast, setAnimation }) => {
    return (
        <div className="button-wrapper">
            <FontAwesomeIcon icon={faTimes} className="button" onClick={() => {
                setAnimation(1);
                setTimeout(() => {
                    setShowToast(false);
                }, 1000)
            }}/>
        </div>
    );
};

export default CloseButton;

CloseButton.propTypes = {
    setShowToast: PropTypes.func.isRequired,
    setAnimation: PropTypes.func.isRequired
};

