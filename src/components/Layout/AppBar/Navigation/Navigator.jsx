import { NavLink } from "react-router-dom";
import { FaHome, FaImages, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className={css.bottomNav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          clsx(css.navIcon, isActive && css.isActive)
        }
        aria-label="Home"
      >
        <FaHome className={css.icon} aria-hidden="true" />
      </NavLink>

      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          clsx(css.navIcon, isActive && css.isActive)
        }
        aria-label="Gallery"
      >
        <FaImages className={css.icon} aria-hidden="true" />
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          clsx(css.navIcon, isActive && css.isActive)
        }
        aria-label="Cart"
      >
        <FaShoppingCart className={css.icon} aria-hidden="true" />
        {totalItems > 0 && (
          <span
            className={css.cartBadge}
            aria-label={`Cart has ${totalItems} items`}
          >
            {totalItems}
          </span>
        )}
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          clsx(css.navIcon, isActive && css.isActive)
        }
        aria-label="Profile"
      >
        <FaUser className={css.icon} aria-hidden="true" />
      </NavLink>
    </nav>
  );
}
