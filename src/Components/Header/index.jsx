import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../Router/paths";
import { useAuthContext } from "../../contexts/authContext";
import ROLES from "../../Constants/ROLES";
import { useThemeContext } from "../../contexts/themeContext";
import { THEMES } from "../../Constants/THEMES";

const Header = () => {
  const { logout, role, user } = useAuthContext();
  const { theme, toggleTheme } = useThemeContext();
  const handleLogout = () => {
    logout();
  };
  if (role === ROLES.USER) {
    return (
      <header>
        <h1>
          <NavLink to={PATHS.HOME}>MY APP</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to={PATHS.ABOUT}>About</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.COUNTER}>Counter</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.TODO}>Todo</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.TYPOGRAPHY}>Typography</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.POSTS.ROOT}>Posts</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.GIFFS}>GIFFS</NavLink>
          </li>
          <li>
            <button onClick={toggleTheme}>
              {theme === THEMES.DARK ? THEMES.DARK : THEMES.LIGHT}
            </button>
          </li>
          <li>
            <button onClick={handleLogout}>LogOut</button>
          </li>
          <li>
            <h5>welcome {user ? user.username : "anynomus"}</h5>
          </li>
        </ul>
      </header>
    );
  } else {
    return (
      <header>
        <h1>
          <NavLink to={PATHS.HOME}>MY APP</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to={PATHS.ABOUT}>About</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.COUNTER}>Counter</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.TODO}>Todo</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.TYPOGRAPHY}>Typography</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.GIFFS}>GIFFS</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.FORMS}>FORMS</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.LOGIN}>Login</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.SIGNUP}>Signup</NavLink>
          </li>
          <li>
            <button onClick={toggleTheme}>
              {theme === THEMES.DARK ? THEMES.DARK : THEMES.LIGHT}
            </button>
          </li>
        </ul>
      </header>
    );
  }
};

export default Header;
