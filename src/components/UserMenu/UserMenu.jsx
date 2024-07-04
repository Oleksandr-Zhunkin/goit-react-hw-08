import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "../UserMenu/UserMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <nav className=" inline-flex gap-7 text-2xl ml-8">
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      </nav>
      <div className="flex justify-center items-center gap-3 ml-auto">
        <p className="text-blue-200 text-lg capitalize">Welcome {user.name}</p>
        <button
          className="text-blue-200 px-3 py-1 border-solid border-2 rounded-lg border-blue-200 hover:text-blue-950 hover:bg-blue-200 "
          type="button"
          onClick={() => dispatch(logOutThunk())}
        >
          Logout
        </button>
      </div>
    </>
  );
};
export default UserMenu;
