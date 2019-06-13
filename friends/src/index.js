import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"; 
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";
import "@material/tab/dist/mdc.tab.css";


ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );