import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css'
import App from './components/App';

// redux
import { createStore, applyMiddleware, compose } from "redux";
// middlewares
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
// react-redux
import { Provider } from "react-redux";
// reducer
import reducers from './reducers'
// react router
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducers, compose(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root')
);
