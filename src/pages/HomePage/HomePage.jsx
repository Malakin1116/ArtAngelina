import { Outlet } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <img
        src="/HeroGallary/Baranovska.JPG"
        alt="Baranovska"
        className={css.artistPhoto}
      />
      <h1 className={css.artistName}>Angelina Baranovska</h1>
      <Outlet />
    </div>
  );
}
