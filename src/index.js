import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import { positions, Provider } from 'react-alert';
import AlertTemplate from "react-alert-template-basic";

import * as serviceWorker from './serviceWorker';

const options = {
    timeout: 5000,
    position: positions.CENTER
  };

ReactDOM.render(

<Provider template={AlertTemplate} {...options}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
