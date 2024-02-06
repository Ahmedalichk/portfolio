import Image from "next/image";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <Hero /> 
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}
