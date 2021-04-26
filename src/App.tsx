import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Container } from 'reactstrap';

import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import MentorsPage from './pages/MentorsPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/mentors">
            <MentorsPage />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
