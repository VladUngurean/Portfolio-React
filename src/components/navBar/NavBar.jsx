export default function NavBar() {
  return (
    <nav className=" max-w-6xl mx-auto w-full flex justify-between items-center p-4">
      <div className="mb-2">
        <p className="text-2xl font-bold">Vlad.dev</p>
      </div>
      <div className="">
        <a href="#aboutMe" className="text-lg font-semibold  max-sm:text-base">
          About Me
        </a>
        <a
          href="#myProjects"
          className="text-lg font-semibold ml-6 max-sm:text-base max-sm:ml-4"
        >
          Projects
        </a>
        <a
          href="#"
          className="text-lg font-semibold ml-6 max-sm:text-base max-sm:ml-4"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
