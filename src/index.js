import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css'
import App from './components/App';

// redux
import { createStore, applyMiddleware, compose } from "redux";
// middlewares
import thunk from 'redux-thunk';
// react-redux
import { Provider } from "react-redux";
// reducer
import reducers from './reducers'
// react router
import { BrowserRouter as Router } from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducers, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root')
);
