import { FaGithub } from "react-icons/fa";

export default function MyIntroduction() {
  return (
    <>
      <div className="flex flex-row justify-center py-12">
        <div className="flex flex-col">
          <p className="text-lg text-start font-bold max-w-[160px]">
            Front-End React Developer &#128075;
          </p>
          <p className="text-[10px] max-w-[240px] py-3">
            Hi, I'm Vlad Ungurean. A passionate Front-End React Developer based
            in Moldova, Chișinău &#128205;
          </p>
          <div className="flex flex-row justify-start items-center">
            <a
              className=" text-[10px] flex flex-row justify-start items-center"
              href="https://github.com/VladUngurean"
            >
              <FaGithub className="text-[15px] animate-bounce mr-1" />
              GitHub
            </a>
          </div>
        </div>
        <div className="flex ml-14">
          <img
            className=" w-[100px] h-[130px]"
            src="src/assets/img/myPhoto.jpg"
            alt="MyImg"
          />
        </div>
      </div>
    </>
  );
}
