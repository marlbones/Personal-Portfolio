import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={AboutPage}/>
      {/* <Route path="/about" exact component={AboutPage}/>
      <Route path="/projects" exact component={ProjectsPage}/> */}
    </Switch>
  </BrowserRouter>
);

export default App;
