import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import Home from './components/pages/Home';
import Categories from './components/pages/Categories';

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/categories">
          <p>Categories</p>
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/categories"><Categories /></Route>
      </Switch>
    </Router>
  );
}

export default App;
