import "./App.css";
import AboutMe from "./components/about/AboutMe";
import { ContactForm } from "./components/contactform/ContactForm";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Timeline from "./components/timeline/Timeline";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Timeline />

      <ContactForm />
    </div>
  );
}

export default App;
