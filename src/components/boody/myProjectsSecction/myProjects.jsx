import {
  FaCloudUploadAlt,
  FaDemocrat,
  FaGithub,
  FaInbox,
} from "react-icons/fa";

export default function MyProjects() {
  return (
    <>
      <div
        id="myProjects"
        className="flex flex-row justify-center py-12 max-sm:py-0"
      >
        <div className=" w-[840px] flex flex-col max-sm:w-auto max-lg:w-[500px] max-lg:text-center max-lg:flex-col max-lg:items-center">
          <p className=" text-xl font-bold text-blue-500">PORTFOLIO</p>
          <p className=" text-3xl font-bold mb-8 max-sm:px-2">
            Each project is a unique piece of development &#129513;
          </p>

          <div className="flex flex-row justify-center text-center max-lg:flex-col max-lg:items-center my-8 py-3 max-lg:border-2 max-lg:border-gray-300  max-lg:bg-gray-300 max-lg:bg-opacity-50 max-lg:rounded max-lg:shadow-[10px_10px_10px_rgba(0,0,0,0.15)] ">
            <div className="max-w-[500px] w-full flex flex-col justify-center max-sm:w-auto max-sm:px-2 max-lg:mb-5">
              <p className=" text-xl text-right max-lg:text-center font-bold mb-2">SelfCare Chisinau</p>
              <p className="text-xl text-right max-lg:text-center p-[5px] font-poppins">
                A Self Care shop
              </p>
              <div className="flex flex-row justify-end max-lg:justify-center my-[10px] gap-5">
                <p className="text-xl font-bold">HTML</p>
                <p className="text-xl font-bold">CSS</p>
                <p className="text-xl font-bold">Java Script</p>
              </div>
              <div className="flex flex-row justify-end max-lg:justify-center items-center mt-2">
                <a
                  className=" text-xl font-bold flex flex-row justify-start items-center mr-4"
                  href="https://github.com/VladUngurean/self_care_ch"
                >
                  <FaGithub className="text-[25px] animate-bounce mx-1" />
                  Code
                </a>
                <a
                  className=" text-xl font-bold flex flex-row justify-start items-center"
                  href="https://self-care-ch.vercel.app/"
                >
                  <FaCloudUploadAlt className="text-[25px] animate-bounce mr-1" />
                  Live Demo
                </a>
              </div>
            </div>

            <img
              className="w-[340px] h-[280px] ml-8 rounded-lg max-lg:ml-0 max-lg:mr-0 object-cover"
              src="/img/selfCareCh.png"
              alt="desk"
            />
          </div>

          <div className="flex flex-row justify-center text-center max-lg:flex-col max-lg:items-center my-8 py-3 max-lg:border-2 max-lg:border-gray-300  max-lg:bg-gray-300 max-lg:bg-opacity-50 max-lg:rounded max-lg:shadow-[10px_10px_10px_rgba(0,0,0,0.15)] ">
            <div className="flex justify-center items-center h-full">
              <img
                className="w-[340px] h-[280px] mr-8 rounded-lg flex max-lg:hidden object-cover"
                src="/img/chDreamCar.png"
                alt="desk"
              />
            </div>


            <div className="max-w-[500px] w-full flex flex-col justify-center max-sm:w-auto max-sm:px-2 max-lg:mb-5">
              <p className=" text-xl text-left max-lg:text-center font-bold mb-2">CHISINAU DREAM CARS &#128663;</p>
              <div className="text-xl text-left max-lg:text-center  p-[5px] font-poppins">
              Introducing my latest project, a dynamic car rental platform. <div className=" text-red-500 inline">Despite being a work in progress</div>, this website offers users the ability to register, browse a diverse selection of cars, and seamlessly rent their ideal vehicle. With ongoing development, expect exciting features like enhanced car management and an intuitive user interface.
              </div>
              <div className="flex flex-row justify-start max-lg:justify-center my-[10px] gap-5">
                <p className="text-xl font-bold">PHP</p>
                <p className="text-xl font-bold">SCSS</p>
                <p className="text-xl font-bold">Java Script</p>
              </div>
              <div className="flex flex-row justify-start max-lg:justify-center items-center mt-2">
                <a
                  className=" text-xl font-bold flex flex-row justify-start items-center mr-4"
                  href="https://github.com/VladUngurean/cars-rent"
                >
                  <FaGithub className="text-[25px] animate-bounce mx-1" />
                  Code
                </a>
                <a
                  className=" text-xl font-bold flex flex-row justify-start items-center"
                  href="https://chisinau-dream-cars.000webhostapp.com/"
                  target="_blank"
                >
                  <FaCloudUploadAlt className="text-[25px] animate-bounce mr-1" />
                  Live Demo
                </a>
              </div>
            </div>

            <img
              className="w-[340px] h-[280px] mr-8 rounded-lg hidden max-lg:flex  max-lg:mr-0 object-contain"
              src="/img/chDreamCar.png"
              alt="desk"
            />
          </div>


          <div className="flex flex-row justify-center text-center max-lg:flex-col max-lg:items-center my-8 py-3 max-lg:border-2 max-lg:border-gray-300  max-lg:bg-gray-300 max-lg:bg-opacity-50 max-lg:rounded max-lg:shadow-[10px_10px_10px_rgba(0,0,0,0.15)] ">
            <div className="max-w-[500px] w-full flex flex-col justify-center max-sm:w-auto max-sm:px-2 max-lg:mb-5">
              <p className=" text-xl text-right max-lg:text-center font-bold mb-2">USEC GYM &#127947;</p>
              <p className="text-xl text-right max-lg:text-center p-[5px] font-poppins">
                A gym website is a comprehensive resource for fitness
                information, class schedules, membership options and tools to
                help user to achive their fitness goals.
              </p>
              <div className="flex flex-row justify-end max-lg:justify-center my-[10px] gap-5">
                <p className="text-xl font-bold">HTML</p>
                <p className="text-xl font-bold">CSS</p>
                <p className="text-xl font-bold">Java Script</p>
              </div>
              <div className="flex flex-row justify-end max-lg:justify-center items-center mt-2">
                <a
                  className=" text-xl font-bold flex flex-row justify-start items-center mr-4"
                  href="https://github.com/VladUngurean/Gym"
                >
                  <FaGithub className="text-[25px] animate-bounce mx-1" />
                  Code
                </a>
                <a
                  className=" text-xl font-bold flex flex-row justify-start items-center"
                  href="https://gym-pied.vercel.app/"
                >
                  <FaCloudUploadAlt className="text-[25px] animate-bounce mr-1" />
                  Live Demo
                </a>
              </div>
            </div>

            <img
              className="w-[340px] h-[280px] ml-8 rounded-lg max-lg:ml-0 max-lg:mr-0 object-cover"
              src="/img/gym-main.png"
              alt="desk"
            />
          </div>

          <div className="flex flex-row justify-center text-center max-lg:flex-col max-lg:items-center my-8 py-3 max-lg:border-2 max-lg:border-gray-300  max-lg:bg-gray-300 max-lg:bg-opacity-50 max-lg:rounded max-lg:shadow-[10px_10px_10px_rgba(0,0,0,0.15)] ">
            <img
              className="w-[340px] h-[280px] mr-8 rounded-lg flex max-lg:hidden object-cover"
              src="/img/crypto-site.png"
              alt="desk"
            />

            <div className="max-w-[500px] w-full flex flex-col justify-center max-sm:w-auto max-sm:px-2 max-lg:mb-5">
              <p className=" text-xl text-left max-lg:text-center font-bold mb-2">COINTRACK &#129689;</p>
              <p className="text-xl text-left max-lg:text-center  p-[5px] font-poppins">
                COINTRACK is a crypto app that allows users to search for
                information about various cryptocurrencies in real-time
              </p>
              <div className="flex flex-row justify-start max-lg:justify-center my-[10px] gap-5">
                <p className="text-xl font-bold">React</p>
                <p className="text-xl font-bold">Tailwind CSS</p>
              </div>
              <div className="flex flex-row justify-start max-lg:justify-center items-center mt-2">
                <a
                  className=" text-xl font-bold flex flex-row justify-start items-center mr-4"
                  href="https://github.com/VladUngurean/crypto-track-website"
                >
                  <FaGithub className="text-[25px] animate-bounce mx-1" />
                  Code
                </a>
                <a
                  className=" text-xl font-bold flex flex-row justify-start items-center"
                  href="https://crypto-track-website.vercel.app/"
                >
                  <FaCloudUploadAlt className="text-[25px] animate-bounce mr-1" />
                  Live Demo
                </a>
              </div>
            </div>

            <img
              className="w-[340px] h-[280px] mr-8 rounded-lg hidden max-lg:flex  max-lg:mr-0 object-cover"
              src="/img/crypto-site.png"
              alt="desk"
            />
          </div>

        </div>
      </div>
    </>
  );
}
