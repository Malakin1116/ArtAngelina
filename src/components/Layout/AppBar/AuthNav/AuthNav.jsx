import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const getNavLinkClass = ({ isActive }) =>
  clsx(css.link, isActive && css.isActive);

export default function AuthNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={css.authNav}>
      {/* Бургер-иконка */}
      <button className={css.burger} onClick={toggleMenu}>
        ☰
      </button>

      {/* Навигация */}
      <ul className={clsx(css.ul, isMenuOpen && css.menuOpen)}>
        <li className={css.li}>
          <NavLink to="/register" className={getNavLinkClass}>
            SignUp
          </NavLink>
        </li>
        <li className={css.li}>
          <NavLink to="/login" className={getNavLinkClass}>
            SignIn
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
