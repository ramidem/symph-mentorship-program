import { Container } from 'reactstrap';

import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <LandingPage />
        <Footer />
      </Container>
    </>
  );
}

export default App;
