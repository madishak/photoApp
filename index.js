import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMidleware from "redux-saga";
import rootSaga from "./containers/sagas/index";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import photos from "./containers/reducers/index.js";
import App from "./components/App";
import './style.css';


const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();

const sagaMidleware = createSagaMidleware();
const middleware = applyMiddleware(sagaMidleware);

const store = createStore(photos, compose(middleware, devtoolMiddleware));
sagaMidleware.run(rootSaga);

console.log("Store", store.getState());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
