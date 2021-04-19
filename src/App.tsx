import { Container } from 'reactstrap';

import Footer from './components/Footer';
// import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import MentorsPage from './pages/MentorsPage';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        {/* <LandingPage /> */}
        <MentorsPage />
        <Footer />
      </Container>
    </>
  );
}

export default App;
