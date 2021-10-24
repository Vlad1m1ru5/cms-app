import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import { Markdown } from "./features/markdown/Markdown";
import { ReactReduxToolkit } from "./features/react-redux-toolkit/ReactReduxToolkit";
import { ThroughHeader } from "./features/through-header/ThroughHeader";

const appRoutes = [
  { name: "Home", path: "/" },
  { name: "Markdown", path: "/markdown" },
];

const App: React.FC = () => {
  return (
    <Router>
      <ThroughHeader routes={appRoutes} />
      <Switch>
        <Route path="/markdown">
          <Markdown />
        </Route>
        <Route path="/">
          <ReactReduxToolkit>
            <Counter />
          </ReactReduxToolkit>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
