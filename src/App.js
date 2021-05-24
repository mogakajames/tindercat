import React from "react";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Home from './Pages/Home';
import Details from './Pages/Details';

import "./App.css";

const App = () => {

  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/:id" exact component={Details} />
    </Router>
  );
};
export default App;
