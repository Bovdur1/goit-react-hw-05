import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.navLinkActive);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <p className={css.logo}>TMDB</p>
        <nav>
          <ul className={css.nav}>
            <li>
              <NavLink to="/" className={makeLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={makeLinkClass}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
