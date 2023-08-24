export default function NavBar() {
  return (
    <nav className="w-full flex justify-between p-4">
      <div className="mb-2 sm:mb-0">
        <p className="text-xs no-underline text-grey-darkest">Home</p>
      </div>
      <div>
        <a href="#" className="text-xs no-underline text-grey-darkest ml-2">
          One
        </a>
        <a href="#" className="text-xs no-underline text-grey-darkest ml-2">
          Two
        </a>
        <a href="#" className="text-xs no-underline text-grey-darkest ml-2">
          Three
        </a>
      </div>
    </nav>
  );
}
