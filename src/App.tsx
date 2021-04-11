import { Container } from 'reactstrap';

import Footer from './components/Footer';
// import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import Mentors from './pages/Mentors';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        {/* <LandingPage /> */}
        <Mentors />
        <Footer />
      </Container>
    </>
  );
}

export default App;
