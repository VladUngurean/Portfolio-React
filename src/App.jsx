import { useState } from "react";
import NavBar from "./components/navBar/NavBar";
import MyIntroduction from "./components/boody/aboutMe/MyIntroduction";
import TechStack from "./components/boody/aboutMe/TechStack";
import AboutMe from "./components/boody/aboutMe/AboutMe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <MyIntroduction />
      <TechStack />
      <AboutMe />
    </>
  );
}

export default App;
