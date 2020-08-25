import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import photos from "./reducers/index.js";
import App from "./App";

const store = createStore(
  photos,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log("Store", store.getState());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
