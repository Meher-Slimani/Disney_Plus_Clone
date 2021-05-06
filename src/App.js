import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/" component={Home} />
          <Route exatc path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
