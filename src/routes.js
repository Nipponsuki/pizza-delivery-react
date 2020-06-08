import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from 'pages/Home';
import Header from 'components/Header';
import Cart from 'pages/Cart';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default App;
