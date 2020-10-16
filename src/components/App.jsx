import React from 'react';
import Toast from './Toast/Toast';
import './app.scss';

const App = () => {
    return (
        <div className="app">
            <Toast type="info" message="This is an info message!" position="top-right" />
        </div>
    );
}

export default App;
