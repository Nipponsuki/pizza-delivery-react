import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from 'pages/Home';
import Header from 'components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
