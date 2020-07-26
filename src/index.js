import React from 'react';
import ReactDOM from 'react-dom';

//Import React Router Dom
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';

ReactDOM.render(
    //We give our website all the functionalities of routing
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

