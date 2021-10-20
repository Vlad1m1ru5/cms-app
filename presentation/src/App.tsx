import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import { Markdown } from "./features/markdown/Markdown";
import { ReactReduxToolkit } from "./features/react-redux-toolkit/ReactReduxToolkit";

const App: React.FC = () => {
  return (
    <Router>
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
