import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => {
      const isOpening = !prevState;
      if (isOpening) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
      return isOpening;
    });
  };

  return (
    <>
      <button
        className={clsx(css.burger, isMenuOpen && css["burger-active"])}
        onClick={toggleMenu}
      >
        <span className={clsx(css["burger-line"], css["burger-line-first"])} />
        <span className={clsx(css["burger-line"], css["burger-line-second"])} />
        <span className={clsx(css["burger-line"], css["burger-line-third"])} />
        <span className={clsx(css["burger-line"], css["burger-line-fourth"])} />
      </button>

      <div
        className={clsx(css["menu-container"], isMenuOpen && css["is-open"])}
      >
        <ul className={css["navigation-mobile-list"]}>
          <li className={css["navigation-items"]}>
            <NavLink
              to="/login"
              className={css["menu-box-link"]}
              onClick={toggleMenu}
            >
              SignIn
            </NavLink>
          </li>

          <li className={css["navigation-items"]}>
            <NavLink
              to="/register"
              className={css["menu-box-link"]}
              onClick={toggleMenu}
            >
              SignUp
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
