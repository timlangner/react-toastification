import { Button } from "@material-ui/core";
import React, { useState } from 'react';
import Toast from './Toast/Toast';
import './app.scss';

const App = () => {
    const [showToast, setShowToast] = useState(true);

    return (
        <div className="app">
            {
                showToast && <Toast type="info" message="This is an info message!" position="top-right" setShowToast={setShowToast} />
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
