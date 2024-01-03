export default function NavBar() {
  return (
    <nav className="max-w-5xl mx-auto w-full flex justify-between items-center p-4">
      <div className="select-none mb-2">
        <p className="text-2xl font-bold">Vlad.dev</p>
      </div>
      <div className="flex">
        <a
          href="#aboutMe"
          className="text-lg font-semibold ml-6 max-sm:text-base max-sm:ml-4 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          About Me
        </a>
        <a
          href="#myProjects"
          // className="text-lg font-semibold ml-6 max-sm:text-base max-sm:ml-4"
          className="text-lg font-semibold ml-6 max-sm:text-base max-sm:ml-4 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          Projects
        </a>
      </div>
    </nav>
  );
}
