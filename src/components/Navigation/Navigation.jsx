import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.scss";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <>
      <nav className=" inline-flex gap-7 text-2xl ml-8">
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
      </nav>
    </>
  );
};
export default Navigation;
