import React, {useState} from "react";
import ToastMessage from "../ToastMessage/ToastMessage";
import ToastIcon from "../ToastIcon/ToastIcon";
import CloseButton from "../CloseButton/CloseButton";
import PropTypes from 'prop-types';
import './toastContainer.scss';

const ToastContainer = ({ type, message, setShowToast }) => {
    const [animation, setAnimation] = useState(0);

    return (
        <div className={`toast-container ${type}`} style={animation === 1 ? { animation: 'bounceOut 1s' } : { animation: 'bounceIn 1s' }}>
            <div className="content-wrapper">
                <div className="status-wrapper">
                    <ToastIcon type={type} />
                    <ToastMessage message={message} />
                </div>
                <CloseButton setShowToast={setShowToast} setAnimation={setAnimation}/>
            </div>
        </div>
    );
};

export default ToastContainer;

ToastContainer.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    setShowToast: PropTypes.func.isRequired
};
