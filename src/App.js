import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import Home from './components/pages/Home';
import Categories from './components/pages/Categories';
import 'boxicons';

function App() {
  return (
    <Router>
      <nav>
        <div>
          <h1>Bookstore CMS</h1>
          <NavLink to="/">
            <p>BOOKS</p>
          </NavLink>
          <NavLink to="/categories">
            <p>CATEGORIES</p>
          </NavLink>
        </div>
        <box-icon name="user" type="solid" color="#0ea3e5" size="md" />
      </nav>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/categories"><Categories /></Route>
      </Switch>
    </Router>
  );
}

export default App;
