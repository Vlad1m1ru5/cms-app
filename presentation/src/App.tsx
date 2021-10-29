import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import { Markdown } from "./features/markdown/Markdown";
import { MarkdownContent } from "./features/markdown/MarkdownContent";
import { ReactReduxToolkit } from "./features/react-redux-toolkit/ReactReduxToolkit";
import { ThroughHeader } from "./features/through-header/ThroughHeader";

const App: React.FC = () => {
  const [routes] = React.useState([
    { name: "Home", path: "/" },
    { name: "Markdown", path: "/markdown" },
  ]);

  return (
    <Router>
      <ThroughHeader routes={routes} />
      <Switch>
        <Route path="/markdown/:markdownId/content">
          {({ match }) => (
            <MarkdownContent markdownId={match?.params.markdownId || ""} />
          )}
        </Route>
        <Route path="/markdown" component={Markdown} />
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
