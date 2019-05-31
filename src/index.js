import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore, { history } from "./configureStore";
import rootSaga from "./rootSaga";
import AppContainer from "./AppContainer";

const config = configureStore();
config.sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={config.store}>
    <AppContainer history={history} />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
