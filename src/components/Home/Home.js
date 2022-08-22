import React, { useRef } from "react";
import About from "../Abour/About";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Presentation from "../Presentation/Presentation";
import Proyects from "../Proyects/Proyects";
import Skills from "../Skills/Skills";

const Home = () => {
  const scrollAbout = useRef(null);
  const scrollProyects = useRef(null);
  const scrollSkills = useRef(null);
  const scrollToElement = () =>
    scrollAbout.current.scrollIntoView({ behavior: "smooth" });

  const scrollToElementProjects = () =>
    scrollProyects.current.scrollIntoView({ behavior: "smooth" });

  const scrollElementSkills = () =>
    scrollSkills.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Menu
        scrollToElement={scrollToElement}
        scrollToElementProjects={scrollToElementProjects}
        scrollElementSkills={scrollElementSkills}
      />

      <Presentation />

      <About scrollAbout={scrollAbout} />

      <Proyects scrollProyects={scrollProyects} />

      <Skills scrollSkills={scrollSkills} />

      <Footer />
    </>
  );
};

export default Home;
