import React from "react";
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router } from "react-router-dom";

import App from './App';
import { initialState } from "./context/initialState";

ReactDOM.render(
    <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />    
        </StateProvider>
    </Router>,
    document.getElementById('root')
);
