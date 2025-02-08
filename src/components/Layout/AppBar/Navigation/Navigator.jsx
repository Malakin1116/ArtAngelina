import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaImages, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getNavLinkClass = ({ isActive }) =>
  clsx(css.link, isActive && css.isActive);

export default function Navigation() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const location = useLocation();
  const isCatalogActive = location.pathname.startsWith("/gallery");

  return (
    <nav className={css.bottomNav}>
      <NavLink to="/" className={css.navIcon} aria-label="Home">
        <FaHome className={css.icon} aria-hidden="true" />
      </NavLink>

      <NavLink
        to="/gallery"
        className={() => clsx(css.navIcon, isCatalogActive && css.isActive)}
        aria-label="Catalog"
      >
        <FaImages className={css.icon} aria-hidden="true" />
      </NavLink>

      <NavLink to="/cart" className={css.navIcon} aria-label="Cart">
        <FaShoppingCart className={css.icon} aria-hidden="true" />
        {totalItems > 0 && (
          <span className={css.cartBadge} aria-label={`Cart has ${totalItems} items`}>
            {totalItems}
          </span>
        )}
      </NavLink>

      <NavLink to="/profile" className={css.navIcon} aria-label="Profile">
        <FaUser className={css.icon} aria-hidden="true" />
      </NavLink>
    </nav>
  );
}
