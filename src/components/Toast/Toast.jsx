import PropTypes from "prop-types";
import React, {useState} from "react";
import ToastContainer from "../ToastContainer/ToastContainer";
import "./toast.scss";

const Toast = ({ type, message, position }) => {
  const [toastOut, setToastOut] = useState(false);

  return (
    <div className={!toastOut ? `toast ${position}` : 'toast--hide'}>
      <ToastContainer type={type} message={message} position={position} setToastOut={setToastOut} />
    </div>
  );
};

export default Toast;

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};
