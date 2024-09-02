import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () => {
  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
