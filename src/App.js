import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/home";
import { Route, Switch, Redirect } from "react-router-dom";
import Blog from "./Components/blog";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/blogs/:id" component={Blog} />
          <Redirect from="/" exact to="/home" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
