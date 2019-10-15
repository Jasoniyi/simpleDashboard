import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import dasha from "./dasha";
import Dashboard from "./Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
