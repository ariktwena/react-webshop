import React from 'react';
import ReactDOM from 'react-dom';

//Import React Router Dom
import { BrowserRouter } from "react-router-dom";

//Redux components
import { Provider } from 'react-redux';
import store from "./redux/store";


import './index.css';
import App from './App';

ReactDOM.render(
    // The "Provider" is where our parent state is: store = global state
    <Provider store={store}>
        {/*We give our website all the functionalities of routing*/}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

