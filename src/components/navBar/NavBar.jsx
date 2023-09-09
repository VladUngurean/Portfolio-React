export default function NavBar() {
  return (
    <nav className="w-full flex justify-between p-4">
      <div className="mb-2">
        <p className="text-2xl font-bold">Vlad.dev</p>
      </div>
      <div className="max-sm:hidden">
        <a href="#" className="text-lg font-semibold ml-6">
          Home
        </a>
        <a href="#" className="text-lg font-semibold ml-6">
          About
        </a>
        <a href="#" className="text-lg font-semibold ml-6">
          Projects
        </a>
        <a href="#" className="text-lg font-semibold ml-6">
          Contact
        </a>
      </div>
    </nav>
  );
}
