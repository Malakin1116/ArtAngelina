import { Outlet } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <img
        src="artist-photo.jpg" // Замініть на реальний шлях до фотографії
        alt="Artist"
        className={css.artistPhoto}
      />
      <h1 className={css.artistName}>Angelina Baranovska</h1>
      <Outlet />
    </div>
  );
}
