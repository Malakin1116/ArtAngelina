import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <li className={css.userMenu}>
      <button onClick={onLogout} className={css.logoutButton}>
        Logout
      </button>
    </li>
  );
}
