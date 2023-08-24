export default function TechStack() {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <p className="text-center text-[10px] font-semibold">Tech Stack | </p>
        <div className="text-center flex justify-center items-center place-content-between">
          <img className="w-6 mx-2" src="/logo/htmlLogo.png" alt="html" />
          <img className="w-6 mx-2" src="/logo/cssLogo.png" alt="css" />
          <img className="w-6 mx-2" src="/logo/jsLogo.png" alt="js" />
          <img className="w-6 mx-2" src="/logo/reactLogo.png" alt="react" />
          <img
            className="w-6 mx-2"
            src="/logo/tailwindLogo.png"
            alt="tailwind"
          />
          <img className="w-6 mx-2" src="/logo/sassLogo.png" alt="scss" />
        </div>
      </div>
    </>
  );
}
