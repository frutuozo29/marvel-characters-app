import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// redux
import { createStore, applyMiddleware, compose } from "redux";
// middlewares
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
// react-redux
import { Provider } from "react-redux";
// reducer
import reducers from './reducers'


const store = createStore(reducers, compose(applyMiddleware(thunk), composeWithDevTools()))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
