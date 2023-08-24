export default function NavBar() {
  return (
    <nav className="w-full flex justify-between p-4">
      <div className="mb-2 sm:mb-0">
        <p className="text-xs font-bold">Vlad.dev</p>
      </div>
      <div>
        <a href="#" className="text-[10px] font-semibold ml-2">
          Home
        </a>
        <a href="#" className="text-[10px] font-semibold ml-2">
          About
        </a>
        <a href="#" className="text-[10px] font-semibold ml-2">
          Projects
        </a>
        <a href="#" className="text-[10px] font-semibold ml-2">
          Contact
        </a>
      </div>
    </nav>
  );
}
