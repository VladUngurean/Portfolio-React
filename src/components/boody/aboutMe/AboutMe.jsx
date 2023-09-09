export default function AboutMe() {
  return (
    <>
      <div className=" h-[500px] flex flex-row justify-center items-center my-[200px] max-lg:flex-col max-lg:bg-[url('/img/fancy.jpg')] bg-cover bg-no-repeat">
        <p className=" text-xl font-bold text-blue-500 font-poppins max-lg:flex hidden">
          ABOUT ME
        </p>

        <img
          className="w-[340px] h-[280px] mr-8 rounded-lg max-lg:hidden"
          src="/img/fancy.jpg"
          alt="desk"
        />
        <div className=" max-w-[500px] max-lg:bg-gray-300 max-lg:bg-opacity-50 max-lg:rounded">
          <p className=" text-xl font-bold text-blue-500 font-poppins flex max-lg:hidden">
            ABOUT ME
          </p>

          <p className=" text-3xl font-bold mb-4 max-lg:text-center">
            A dedicated Front-End Developer based in Moldova, Chișinău &#128205;
          </p>
          <p className=" text-base font-poppins max-lg:text-center">
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
