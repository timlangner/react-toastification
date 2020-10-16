import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import ToastContainer from "../ToastContainer/ToastContainer";
import "./toast.scss";

const Toast = ({ type, message, position, timeout }) => {
  const [toastOut, setToastOut] = useState(false);
   useEffect(() => {
     setTimeout(() => {
       setToastOut(true);
     }, timeout)
   }, [timeout]);

  return (
    <div className={!toastOut ? `toast ${position}` : `toast toast-${position}--hide`}>
      <ToastContainer type={type} message={message} position={position} setToastOut={setToastOut} />
    </div>
  );
};

export default Toast;

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  timeout: PropTypes.number.isRequired
};
