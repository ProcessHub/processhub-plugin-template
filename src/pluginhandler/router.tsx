import * as React from "react";
import { Router, Route, browserHistory } from "react-router";
import * as ReactDOM from "react-dom";
import { TestComponent } from "../plugin/testcomponent";

export const routes = <Route>
  <Route path="/plugin/testcomponentview" component={TestComponent} />
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
