import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className="text-white uppercase flex justify-between items-center w-[70%] mx-auto mt-[7rem] tab-port:flex-col tab-port:gap-[6rem]">
      <div className="flex flex-col gap-[2.4rem] basis-[50%] tab-port:text-center">
        <p className="text-blue-300 text-[2.8rem] tab-land:text-[2.4rem] tracking-[.4rem] tab-land:tracking-[.2rem] font-barlow-condensed">
          So, you want to travel to
        </p>
        <p className="text-[14.4rem] tab-land:text-[12.5rem] phone:text-[9.5rem] font-bellefair">
          Space
        </p>
        <p className="text-blue-300 text-[1.8rem] font-barlow-condensed leading-[3.24rem]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      {/* AT DESKTOP SCREEN SIZE  */}
      <article className="tab-land:hidden">
        <Link to="/destination">
          <div className="relative">
            <div className="rounded-full ml-[-7rem] mt-[-5rem] bg-white h-[45rem] w-[45rem] tab-port: opacity-0 z-10 ease-in-out duration-500 hover:opacity-20 absolute inset-0"></div>
            <div className="rounded-full relative ml-[2rem] pt-[3.8rem]">
              <img
                className="rounded-full"
                src="/assets/home/explore.png"
                alt="explore-image"
              />
            </div>
          </div>
        </Link>
      </article>

      {/* TABLET AND MOBILE SCREENS */}
      <article className="hidden tab-land:block">
        <Link to="/destination">
          <div className="bg-white rounded-full p-[2rem] w-[30rem] h-[30rem] text-center flex justify-center items-center text-blue-900 text-[4rem] font-normal font-bellefair">
            EXPLORE
          </div>
        </Link>
      </article>
    </main>
  );
}
