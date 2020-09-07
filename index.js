import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMidleware from "redux-saga";
import { Router } from "react-router-dom";
import rootSaga from "./containers/PhotosLoaderButton/sagas";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import reducer from "./containers/reducers/index.js";
import App from "./containers/App/App";
import { createBrowserHistory } from "history";

import "./style.css";

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();

const sagaMidleware = createSagaMidleware();
const middleware = applyMiddleware(sagaMidleware);

const store = createStore(reducer, compose(middleware, devtoolMiddleware));
sagaMidleware.run(rootSaga);

const history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      <App />    
    </Router>
  </Provider>,
  document.getElementById("app")
);
