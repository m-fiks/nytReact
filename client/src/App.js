import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Search from "./components/Search";
import Results from "./components/Results";
import Wrapper from "./components/Wrapper";
import Main from "./pages/Main"

const App = () => (
<Router>
  <div>
      <Switch>
      <Route exact path="/" component ={Main} />
      <Route exact path="/search" component= {Search} />
      <Route exact path="/results" component={Results}/>
      </Switch>
  </div>
</Router>
)

export default App;