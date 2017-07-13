import * as React from "react";
import { Router, Route, browserHistory } from "react-router";
import * as ReactDOM from "react-dom";
import { ComponentWrapper } from "./componentwrapper";

export const routes = <Route>
  <Route path="/plugin/:component" component={ComponentWrapper} />
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

ReactDOM.render(
    <AppRouter />
  , document.getElementById("ProcessHubPlugin")
);
