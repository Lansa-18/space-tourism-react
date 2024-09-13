import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="pt-[4rem] flex items-center justify-between -z-10 tab-port:pt-0">
      <Logo />
      <ul className="text-white flex bg-nav-bg-color backdrop-blur-[4rem] gap-[4.8rem] py-0 px-[6.4rem] justify-end tab-port:bg-nav-bg-color-tablet">
        <li className="">
          <NavLink
            className="flex gap-[.8rem] text-[1.6rem] tracking-[2px] py-[4.8rem]"
            to="/"
          >
            <strong className="text-[1.6rem] font-bold tracking-[2.7px]">
              00
            </strong>
            HOME
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className="flex gap-[.8rem] text-[1.6rem] tracking-[2px] py-[4.8rem]"
            to="/destination"
          >
            <strong className="text-[1.6rem] font-bold tracking-[2.7px]">
              01
            </strong>
            DESTINATION
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className="flex gap-[.8rem] text-[1.6rem] tracking-[2px] py-[4.8rem]"
            to="/crew"
          >
            <strong className="text-[1.6rem] font-bold tracking-[2.7px]">
              02
            </strong>
            CREW
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className="flex gap-[.8rem] text-[1.6rem] tracking-[2px] py-[4.8rem]"
            to="/technology"
          >
            <strong className="text-[1.6rem] font-bold tracking-[2.7px]">
              03
            </strong>
            TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
