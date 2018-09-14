import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store';
import './index.css';


import StockTracker from './stockTracker'



ReactDOM.render(
    <Provider store={store}>
        <StockTracker />
    </Provider>,
    document.getElementById('root')
);

