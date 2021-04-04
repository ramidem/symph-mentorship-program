import { Container } from "reactstrap";

import Footer from "./components/Footer";
import MainSection from "./components/Landing/MainSection";
import NavBar from "./components/NavBar";
import SubSection from "./components/Landing/SubSection";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <MainSection />
        <SubSection />
        <Footer />
      </Container>
    </>
  );
}

export default App;
