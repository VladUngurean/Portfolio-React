import { FaGithub, FaMailBulk, FaMailchimp, FaPhone } from "react-icons/fa";

export default function MyIntroduction() {
  return (
    <>
      <div className="flex flex-row justify-center items-center mt-[120px] max-lg:flex-col">
        <div className="flex flex-col justify-center max-sm:items-center max-lg:items-center">
          <p className="text-6xl text-start font-bold max-sm:text-center max-sm:mx-auto max-w-[560px] mb-7 max-lg:text-4xl ">
            Front-End React Developer &#128075;
          </p>
          <p className="text-base max-w-[400px] font-poppins mb-7 max-sm:px-2 max-lg:text-center">
            Hi, I'm Vlad Ungurean. A passionate Front-End React Developer based
            in Moldova, Chișinău &#128205;
          </p>
          <div className="flex flex-row justify-start items-center max-sm:flex-col">
            <a
              className=" text-lg font-bold font-poppins flex flex-row justify-start items-center"
              href="https://github.com/VladUngurean"
            >
              <FaGithub className="text-[25px] animate-bounce mr-1" />
              GitHub
            </a>
            <div className="flex justify-center items-center flex-row mx-3 max-sm:my-2">
              <a className="font-poppins flex flex-row" href="tel:067242877">
                <FaPhone className="text-[25px] mr-1" />
                +373 067 242 877
              </a>
            </div>
            <div className="flex justify-center items-center flex-row">
              <p className="font-poppins flex flex-row">
                <FaMailBulk className="text-[25px] mr-2" />
                vladungurean23@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-20">
          <div className="flex flex-row justify-center items-center relative ">
            <svg
              className=" w-[284px] h-[334px] absolute bottom-[56px] left-[1px] z-10"
              viewBox="100 100 300 300"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="100%"
            >
              <path fill="none" stroke-width="186px" stroke="#000000">
                <animate
                  attributeName="d"
                  dur="8000ms"
                  repeatCount="indefinite"
                  values="M484,297.5Q479,345,449,382Q419,419,378,439Q337,459,293.5,470.5Q250,482,203.5,477.5Q157,473,118.5,446.5Q80,420,58,379.5Q36,339,23,294.5Q10,250,19,204Q28,158,51,116Q74,74,115,48.5Q156,23,203,12.5Q250,2,293.5,21Q337,40,380.5,58Q424,76,449.5,116.5Q475,157,482,203.5Q489,250,484,297.5Z;
                    M474,294.5Q464,339,445,382.5Q426,426,382.5,445.5Q339,465,294.5,476Q250,487,206.5,473Q163,459,118.5,442.5Q74,426,49.5,384.5Q25,343,18,296.5Q11,250,18.5,203.5Q26,157,56.5,122Q87,87,124,61.5Q161,36,205.5,20.5Q250,5,297.5,13Q345,21,381.5,51.5Q418,82,441,121.5Q464,161,474,205.5Q484,250,474,294.5Z;
                    M468.75671,292.92701Q457.70805,335.85402,439.75671,378.82969Q421.80536,421.80536,379.35402,441.30536Q336.90268,460.80536,293.45134,467.61073Q250,474.41609,203.87835,473Q157.75671,471.58391,116.92701,447.74329Q76.09732,423.90268,55.79195,381.35402Q35.48659,338.80536,23.24329,294.40268Q11,250,19.02433,203.5Q27.04866,157,53.87835,118.85402Q80.70805,80.70805,121.90268,60.45134Q163.09732,40.19464,206.54866,23.64598Q250,7.09732,295.92701,17.71897Q341.85402,28.34061,383.07299,52.02433Q424.29195,75.70805,447.29195,117.30536Q470.29195,158.90268,475.04866,204.45134Q479.80536,250,468.75671,292.92701Z;
                    M484,297.5Q479,345,449,382Q419,419,378,439Q337,459,293.5,470.5Q250,482,203.5,477.5Q157,473,118.5,446.5Q80,420,58,379.5Q36,339,23,294.5Q10,250,19,204Q28,158,51,116Q74,74,115,48.5Q156,23,203,12.5Q250,2,293.5,21Q337,40,380.5,58Q424,76,449.5,116.5Q475,157,482,203.5Q489,250,484,297.5Z;"
                ></animate>
              </path>
            </svg>

            <svg
              className=" w-[286px] h-[336px] absolute bottom-[55px] left-[0px] z-10"
              viewBox="100 100 300 300"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="100%"
            >
              <path fill="none" stroke-width="180px" stroke="#e5e7eb">
                <animate
                  attributeName="d"
                  dur="8000ms"
                  repeatCount="indefinite"
                  values="M484,297.5Q479,345,449,382Q419,419,378,439Q337,459,293.5,470.5Q250,482,203.5,477.5Q157,473,118.5,446.5Q80,420,58,379.5Q36,339,23,294.5Q10,250,19,204Q28,158,51,116Q74,74,115,48.5Q156,23,203,12.5Q250,2,293.5,21Q337,40,380.5,58Q424,76,449.5,116.5Q475,157,482,203.5Q489,250,484,297.5Z;
                    M474,294.5Q464,339,445,382.5Q426,426,382.5,445.5Q339,465,294.5,476Q250,487,206.5,473Q163,459,118.5,442.5Q74,426,49.5,384.5Q25,343,18,296.5Q11,250,18.5,203.5Q26,157,56.5,122Q87,87,124,61.5Q161,36,205.5,20.5Q250,5,297.5,13Q345,21,381.5,51.5Q418,82,441,121.5Q464,161,474,205.5Q484,250,474,294.5Z;
                    M468.75671,292.92701Q457.70805,335.85402,439.75671,378.82969Q421.80536,421.80536,379.35402,441.30536Q336.90268,460.80536,293.45134,467.61073Q250,474.41609,203.87835,473Q157.75671,471.58391,116.92701,447.74329Q76.09732,423.90268,55.79195,381.35402Q35.48659,338.80536,23.24329,294.40268Q11,250,19.02433,203.5Q27.04866,157,53.87835,118.85402Q80.70805,80.70805,121.90268,60.45134Q163.09732,40.19464,206.54866,23.64598Q250,7.09732,295.92701,17.71897Q341.85402,28.34061,383.07299,52.02433Q424.29195,75.70805,447.29195,117.30536Q470.29195,158.90268,475.04866,204.45134Q479.80536,250,468.75671,292.92701Z;
                    M484,297.5Q479,345,449,382Q419,419,378,439Q337,459,293.5,470.5Q250,482,203.5,477.5Q157,473,118.5,446.5Q80,420,58,379.5Q36,339,23,294.5Q10,250,19,204Q28,158,51,116Q74,74,115,48.5Q156,23,203,12.5Q250,2,293.5,21Q337,40,380.5,58Q424,76,449.5,116.5Q475,157,482,203.5Q489,250,484,297.5Z;"
                ></animate>
              </path>
            </svg>
          </div>
          <div className="flex ml-1">
            <img
              className=" w-[280px] h-[330px] relative bottom-16 z-0"
              src="/img/myPhotoNoBg.png"
              alt="MyImg"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" w-[840px] flex flex-row justify-start items-center max-sm:w-auto max-lg:justify-center">
          <p className="text-start text-xl font-semibold">Tech Stack | </p>
          <div className="w-[450px] flex justify-between items-center max-sm:w-auto">
            <img
              className="w-11 ml-9 max-sm:w-9 max-sm:ml-2"
              src="/logo/htmlLogo.png"
              alt="html"
            />
            <img
              className="w-11 max-sm:w-9"
              src="/logo/cssLogo.png"
              alt="css"
            />
            <img className="w-11 max-sm:w-9" src="/logo/jsLogo.png" alt="js" />
            <img
              className="w-11 max-sm:w-9"
              src="/logo/reactLogo.png"
              alt="react"
            />
            <img
              className="w-11 max-sm:w-9"
              src="/logo/tailwindLogo.png"
              alt="tailwind"
            />
            <img
              className="w-11 max-sm:w-9"
              src="/logo/sassLogo.png"
              alt="scss"
            />
          </div>
        </div>
      </div>
    </>
  );
}
