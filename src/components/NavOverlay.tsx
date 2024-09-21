import { NavLink } from "react-router-dom";

type NavOverlayProps = {
  activeHamburger: boolean;
  setActiveHamburger: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavOverlay({
  activeHamburger,
  setActiveHamburger,
}: NavOverlayProps) {
  if (!activeHamburger) return null;
  return (
    <article className="hidden custom-850:flex flex-col gap-spacing-600 min-h-[200vh] border border-red-900 absolute top-0 right-0 backdrop-blur-[4rem] z-50 w-[75%]">
      <div className="ml-auto my-[4rem] pr-[4rem]" onClick={() => setActiveHamburger(false)}>
        <img
          className="w-[3rem] h-[3rem]"
          src="/assets/shared/icon-close.svg"
          alt="close-icon"
        />
      </div>

      <ul className="text-white flex flex-col gap-spacing-600 pl-[4rem]">
        <li className="">
          <NavLink
            className="flex gap-spacing-150 tracking-[2px] text-[1.6rem]"
            to="/"
          >
            <strong className="font-barlow-condensed font-bold text-[1.6rem] tracking-[2.7px]">
              00
            </strong>
            HOME
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className="flex gap-spacing-150 tracking-[2px] text-[1.6rem]"
            to="/"
          >
            <strong className="">
              01
            </strong>
            DESTINATION
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className="flex gap-spacing-150 tracking-[2px] text-[1.6rem]"
            to="/"
          >
            <strong className="">
              02
            </strong>
            CREW
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className="flex gap-spacing-150 tracking-[2px] text-[1.6rem]"
            to="/"
          >
            <strong className="">
              03
            </strong>
            TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </article>
  );
}
