import PropTypes from "prop-types";
import React from "react";
import ToastContainer from "../ToastContainer/ToastContainer";
import "./toast.scss";

const Toast = ({ type, message, position, setShowToast }) => {

  return (
    <div className={`toast ${position}`}>
      <ToastContainer type={type} message={message} position={position} setShowToast={setShowToast} />
    </div>
  );
};

export default Toast;

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  setShowToast: PropTypes.func.isRequired,
};
