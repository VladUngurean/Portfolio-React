import { useState } from "react";
import NavBar from "./components/navBar/NavBar";
import MyIntroduction from "./components/boody/aboutMe/MyIntroduction";
// import TechStack from "./components/boody/aboutMe/TechStack";
import AboutMe from "./components/boody/aboutMe/AboutMe";
import MyProjects from "./components/boody/myProjectsSecction/myProjects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <MyIntroduction />
      {/* <TechStack /> */}
      <AboutMe />
      <MyProjects />
    </>
  );
}

export default App;
