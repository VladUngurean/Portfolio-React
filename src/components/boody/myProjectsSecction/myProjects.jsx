import {
  FaCloudUploadAlt,
  FaDemocrat,
  FaGithub,
  FaInbox,
} from "react-icons/fa";

export default function MyProjects() {
  return (
    <>
      <div className="flex flex-row justify-center py-12">
        <div className=" w-[840px] flex flex-col">
          <p className=" text-xl font-bold text-blue-500">PORTFOLIO</p>
          <p className=" text-3xl font-bold mb-8">
            Each project is a unique piece of development &#129513;
          </p>

          <div className="flex flex-row justify-center text-center">
            <img
              className="w-[340px] h-[280px] mr-8 rounded-lg"
              src="/img/gym-main.png"
              alt="desk"
            />
            <div className="w-[500px] flex flex-col justify-center ">
              <p className=" text-xl font-bold mb-2">USEC GYM &#127947;</p>
              <p className="text-xl font-poppins">
                A gym website is a comprehensive resource for fitness
                information, class schedules, membership options and tools to
                help user to achive their fitness goals.
              </p>
              <div className="flex flex-row justify-center">
                <p className=" text-xl font-bold m-2">HTML</p>
                <p className=" text-xl font-bold m-2">CSS</p>
                <p className=" text-xl font-bold m-2">Java Script</p>
              </div>
              <div className="flex flex-row justify-center items-center mt-2">
                <a
                  className=" text-xl font-bold flex flex-row justify-start items-center mr-4"
                  href="https://github.com/VladUngurean/Gym"
                >
                  <FaGithub className="text-[25px] animate-bounce mx-1" />
                  Code
                </a>
                <a
                  className=" text-xl font-bold flex flex-row justify-start items-center"
                  href="https://vladungurean.github.io/Gym/"
                >
                  <FaCloudUploadAlt className="text-[25px] animate-bounce mr-1" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
