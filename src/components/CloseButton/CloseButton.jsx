import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-light-svg-icons";
import './closeButton.scss';

const CloseButton = ({ type }) => {
    return (
        <div className="button-wrapper">
            <FontAwesomeIcon icon={faTimes} className="button" onClick={() => {
                console.log('close')
            }}/>
        </div>
    );
};

export default CloseButton;

