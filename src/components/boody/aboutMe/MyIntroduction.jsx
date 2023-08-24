export default function MyIntroduction() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col bg-gray-500">
          <p className="text-lg text-start font-bold bg-green-100 max-w-[160px]">
            Front-End React Developer &#128075;
          </p>
          <p className="text-[10px] bg-red-100 max-w-[330px]">
            Hi, I'm Vlad Ungurean. A passionate Front-End React Developer based
            in Moldova, Chișinău &#128205;
          </p>
          <div>
            <p>GitHub</p>
          </div>
        </div>
        <div className="flex w-[50px] h-[50px] bg-slate-600">
          <img src="#" alt="MyImg" />
        </div>
      </div>
    </>
  );
}
