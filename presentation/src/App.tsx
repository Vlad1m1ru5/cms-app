import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./features/loading/Loading";

const Dashboard = React.lazy(
  async () => await import("./pages/dashboard/Dashboard")
);

const Home = React.lazy(async () => await import("./pages/home/Home"));

const App: React.FC = () => {
  return (
    <Router>
      <React.Suspense fallback={Loading}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default App;
