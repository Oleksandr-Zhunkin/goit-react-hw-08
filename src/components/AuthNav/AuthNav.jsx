import { NavLink } from "react-router-dom";
import s from "../AuthNav/AutNav.module.scss";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AuthNav = () => {
  return (
    <>
      <nav className=" inline-flex gap-7 text-2xl ml-8">
        <NavLink to="/register" className={buildLinkClass}>
          Register
        </NavLink>
        <NavLink to="/login" className={buildLinkClass}>
          Login
        </NavLink>
      </nav>
    </>
  );
};
export default AuthNav;
