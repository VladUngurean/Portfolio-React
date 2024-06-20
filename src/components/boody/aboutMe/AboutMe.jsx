export default function AboutMe() {
  return (
    <>
      <div
        id="aboutMe"
        className=" min-h-[500px] flex flex-row justify-center items-center mt-[200px] mb-[50px] max-lg:flex-col max-lg:bg-[url('/img/fancy.jpg')] bg-cover bg-no-repeat"
      >
        <p className=" text-xl font-bold text-blue-500 font-poppins max-lg:flex hidden">
          ABOUT ME
        </p>

        <img
          className="w-[340px] h-[280px] mr-8 rounded-lg max-lg:hidden object-cover"
          src="/img/fancy.jpg"
          alt="desk"
        />
        <div className=" max-w-[500px] max-lg:bg-black max-lg:bg-opacity-40 max-lg:rounded">
          <p className=" text-xl font-bold text-blue-500 font-poppins flex max-lg:hidden">
            ABOUT ME
          </p>

          <p className=" max-lg:text-cyan-50 text-3xl font-bold mb-4 max-sm:px-2 max-lg:text-center">
            A dedicated Front-End Developer based in Moldova, Chișinău &#128205;
          </p>
          <p className="max-lg:text-cyan-50 text-base font-poppins max-sm:px-2 max-lg:text-center">
          I am a young and ambitious professional seeking an opportunity to start my career as a Front-End developer.
  My skills include a deep understanding of HTML, CSS, and experience working with them. As for programming language, I am proficient in JavaScript and have used it in practice, but there is still room for growth. 
  Additionally, I have begun my journey in learning PHP and MySQL, applying the knowledge gained in developing my own full-stack project, Chisinau Dream Cars, which you can explore by following the link below.
          </p>
        </div>
      </div>
    </>
  );
}
