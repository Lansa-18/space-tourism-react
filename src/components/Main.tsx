import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <section className="text-white uppercase flex justify-between items-center w-[70%] mx-auto mt-[7rem]">
        <div className="flex flex-col gap-[2.4rem] basis-[50%]">
          <p className="text-blue-300 text-[2.8rem] tracking-[.4rem] font-barlow-condensed">
            So, you want to travel to
          </p>
          <p className="text-[14.4rem] font-bellefair">Space</p>
          <p className="text-blue-300 text-[1.8rem] font-barlow-condensed leading-[3.24rem]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <article>
          {/* TRANSPARENT DIV THAT OVERLAYS UPON HOVERING*/}
          {/* <div className="rounded-full bg-red-950 h-[43rem] w-[43rem] opacity-100 z-10 transition-all duration-150 hover:opacity-20"></div>
          <div className="rounded-full absolute top-[34rem] ml-[8rem] -z-10">
            <img
              className="rounded-full"
              src="/assets/home/explore.png"
              alt="explore-image"
            />
          </div> */}

          <Link to='/destination'>   
          <div className="relative">
            <div className="rounded-full ml-[-7rem] mt-[-5rem] bg-white h-[45rem] w-[45rem] opacity-0 z-10 ease-in-out duration-500 hover:opacity-20 absolute inset-0"></div>
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
      </section>
    </main>
  );
}
