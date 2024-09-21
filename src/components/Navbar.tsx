import { NavLink } from "react-router-dom";
import Logo from "./Logo";

// type NavbarProps = {

export default function Navbar({ setActiveHamburger }) {
  return (
    <>
      <nav className="custom-850:px-[4rem] flex items-center justify-between -z-10">
        <Logo />

        {/* DESKTOP NAVIGATION */}
        <ul className="text-white flex bg-nav-bg-color backdrop-blur-[4rem] gap-[4.8rem] py-0 px-[6.4rem] tab-port:bg-nav-bg-color-tablet tab-port:basis-[60%] tab-land:px-[3.4rem] custom-850:hidden">
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

        {/* MOBILE NAVIGATION */}
        <div className="hidden custom-850:block" onClick={setActiveHamburger}>
          <img
            className="block"
            src="/assets/shared/icon-hamburger.svg"
            alt="hamburger-icon"
          />
        </div>
      </nav>

    </>
  );
}
