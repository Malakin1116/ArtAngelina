import { NavLink } from "react-router-dom";
import { FaHome, FaImages, FaShoppingCart, FaUser } from "react-icons/fa";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.bottomNav}>
      <NavLink to="/" className={css.navIcon} aria-label="Home">
        <FaHome className={css.icon} aria-hidden="true" />
      </NavLink>

      <NavLink to="/gallery" className={css.navIcon} aria-label="Catalog">
        <FaImages className={css.icon} aria-hidden="true" />
      </NavLink>

      <NavLink to="/cart" className={css.navIcon} aria-label="Cart">
        <FaShoppingCart className={css.icon} aria-hidden="true" />
      </NavLink>

      <NavLink to="/profile" className={css.navIcon} aria-label="Profile">
        <FaUser className={css.icon} aria-hidden="true" />
      </NavLink>
    </nav>
  );
}
