import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./store/reducers/rootReducer";
import LandingPage from "./containers/LandingPage";
import IkBenArts from "./containers/IkBenArts";
import SignUpConfirmation from "../src/containers/SignUpConfirmation";
import HuurEenArts from "./containers/HuurEenArts";

const store = createStore(rootReducer, applyMiddleware(thunk));

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={LandingPage} />
      <Route exact path="/ikbenarts" component={IkBenArts} />
      <Route exact path="/huureenarts" component={HuurEenArts} />
      <Route path="/ikbenarts/confirmation" component={SignUpConfirmation} />
    </div>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{routing}</Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
