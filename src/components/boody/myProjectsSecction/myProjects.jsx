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
        <div className="flex flex-col">
          <p className=" text-[10px] font-bold text-blue-500">PORTFOLIO</p>
          <p className=" text-[14px] font-bold mb-8">
            Each project is a unique piece of development &#129513;
          </p>

          <div className="flex flex-row justify-center text-center">
            <img
              className="w-[165px] h-[150px] mr-8 rounded-lg"
              src="/img/gym-main.png"
              alt="desk"
            />
            <div className="flex flex-col justify-center">
              <p className=" text-[10px] font-bold mb-2">USEC GYM &#127947;</p>
              <p className="text-[10px] max-w-[240px] font-poppins">
                A gym website is a comprehensive resource for fitness
                information, class schedules, membership options and tools to
                help user to achive their fitness goals.
              </p>
              <div className="flex flex-row justify-center">
                <p className=" text-[10px] font-bold m-2">HTML</p>
                <p className=" text-[10px] font-bold m-2">CSS</p>
                <p className=" text-[10px] font-bold m-2">Java Script</p>
              </div>
              <div className="flex flex-row justify-center items-center mt-2">
                <a
                  className=" text-[10px] font-bold flex flex-row justify-start items-center mr-4"
                  href="https://github.com/VladUngurean/Gym"
                >
                  <FaGithub className="text-[15px] animate-bounce mx-1" />
                  Code
                </a>
                <a
                  className=" text-[10px] font-bold flex flex-row justify-start items-center"
                  href="https://vladungurean.github.io/Gym/"
                >
                  <FaCloudUploadAlt className="text-[15px] animate-bounce mr-1" />
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
