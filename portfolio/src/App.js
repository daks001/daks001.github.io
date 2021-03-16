import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import homepage from "./components/homepage";
import about from "./components/about";
import projects from "./components/projects";
import activities from "./components/activities";
import work from "./components/work";
import contact from "./components/contact";
import error from "./components/error";

import Particles from "react-particles-js";

const App = () => {
  return (
    <Router>
      <div classname="App" style={{ backgroundColor: "black" }}>
        <Particles />
        <Switch>
          <Route exact path="/" component={homepage} />
          <Route exact path="/about" component={about} />
          <Route exact path="/projects" component={projects} />
          <Route exact path="/activities" component={activities} />
          <Route exact path="/work" component={work} />
          <Route exact path="/contact" component={contact} />
          <Route component={error} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
