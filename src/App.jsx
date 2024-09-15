import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <HeroSection />
      <Main />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
