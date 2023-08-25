export default function TechStack() {
  return (
    <>
      <div className="flex flex-row justify-center items-center ">
        <div className=" w-[840px] flex flex-row justify-start items-center">
          <p className="text-start text-xl font-semibold">Tech Stack | </p>
          <div className="w-[450px] flex justify-between items-center">
            <img className="w-11 ml-9" src="/logo/htmlLogo.png" alt="html" />
            <img className="w-11" src="/logo/cssLogo.png" alt="css" />
            <img className="w-11" src="/logo/jsLogo.png" alt="js" />
            <img className="w-11" src="/logo/reactLogo.png" alt="react" />
            <img className="w-11" src="/logo/tailwindLogo.png" alt="tailwind" />
            <img className="w-11" src="/logo/sassLogo.png" alt="scss" />
          </div>
        </div>
      </div>
    </>
  );
}
