import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

//import BrowserRouter component so we can use it
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Wrap our application in the BrowserRouter, this container allows us to use routing in our application now */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
