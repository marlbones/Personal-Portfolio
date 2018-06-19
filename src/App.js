import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage}/>
      <Route path="/about" exact component={AboutPage}/>
    </Switch>
  </BrowserRouter>
);

export default App;
