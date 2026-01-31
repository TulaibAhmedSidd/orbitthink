import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
