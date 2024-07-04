import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <>
      <header className=" flex justify-between items-center bg-blue-950 p-5 rounded-xl mb-10">
        <Navigation />
        {isLogin ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};
export default AppBar;
