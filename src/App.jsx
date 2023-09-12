import NavBar from "./components/navBar/NavBar";
import MyIntroduction from "./components/boody/aboutMe/MyIntroduction";
import AboutMe from "./components/boody/aboutMe/AboutMe";
import MyProjects from "./components/boody/myProjectsSecction/myProjects";
import ScrollToTopButton from "./components/ScrollToTop";

function App() {
  return (
    <>
      <NavBar />
      <MyIntroduction />
      <AboutMe />
      <MyProjects />
      <ScrollToTopButton />
    </>
  );
}

export default App;
