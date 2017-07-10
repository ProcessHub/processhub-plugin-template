import * as React from "react";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { Test3 } from "./plugin3/test3";

export const routes = <Route>
  <Route path="/plugin3/test3" component={Test3} />
</Route>;

export class AppRouter extends React.Component<{}, {}> {
  render() {
    return (
      <Router history={browserHistory} >
        {routes}
      </Router>
    );
  }
}