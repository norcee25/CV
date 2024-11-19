import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills/index";


const App = () => {
  return (
<div>
  <Header />
  <Hero />
  <About />
  <Education/>
  <Skills />
  <Experience />
  <Portofolio />
  <Contact />
  <Footer />
</div>

  )
}

export default App;