import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import ToastContainer from "./ToastContainer/ToastContainer";
import './app.scss';

const App = () => {
    const [showToast, setShowToast] = useState(true);

    return (
        <div className="app">
            {
                showToast && <ToastContainer type="info" message="This is an info message!" setShowToast={setShowToast} />
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
