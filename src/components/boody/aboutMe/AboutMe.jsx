export default function AboutMe() {
  return (
    <>
      <div className="flex flex-row justify-center items-center my-[200px]">
        <img
          className="w-[165px] h-[150px] mr-8 rounded-lg"
          src="/img/fancy.jpg"
          alt="desk"
        />

        <div className=" max-w-[250px]">
          <p className=" text-[10px] font-bold text-blue-500">ABOUT ME</p>

          <p className=" text-sm font-bold">
            A dedicated Front-End Developer based in Moldova, Chișinău &#128205;
          </p>
          <p className=" text-[9px]">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </>
  );
}
