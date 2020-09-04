import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import PhotoCardView from './PhotoCardView';

const App = () => {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={PhotoCardView} />
    </Switch>
  );
}

export default App;
