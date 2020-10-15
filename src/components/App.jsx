import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import ToastContainer from "./ToastContainer/ToastContainer";
import './app.scss';

const App = () => {
    const [showToast, setShowToast] = useState(false);

    return (
        <div className="app">
            {
                showToast && <ToastContainer type="success" message="This is a success message!" />
            }
            <Button variant="contained" color="primary" onClick={() => {
              setShowToast(true);
            }}>
              Show Toast!
            </Button>
        </div>
    );
}

export default App;
