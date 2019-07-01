import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/home";
import { Route, Switch, Redirect } from "react-router-dom";
import June20 from "./blogs/june20";
import June21 from "./blogs/june21";
import June22 from "./blogs/june22";
import June25 from "./blogs/june25";
import June28 from "./blogs/june28";
import July1 from "./blogs/july1";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/blogs/june20" component={June20} />
          <Route path="/blogs/june21" component={June21} />
          <Route path="/blogs/june22" component={June22} />
          <Route path="/blogs/june25" component={June25} />
          <Route path="/blogs/june28" component={June28} />
          <Route path="/blogs/july1" component={July1} />
          <Redirect from="/" exact to="/home" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
