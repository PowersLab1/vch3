import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
process.env.NODE_CONFIG_DIR = '../config'

ReactDOM.render(
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <App />
    </Router>,
    document.getElementById("root")
);
