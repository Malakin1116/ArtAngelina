import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaTiktok,
  FaPaintBrush,
} from "react-icons/fa";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>ArtAngelina</h1>

      <div className={css.imageWrapper}>
        <img
          src="/HeroGallary/Baranovska.JPG"
          alt="Baranovska"
          className={css.artistPhoto}
        />
      </div>

      <div className={css.socialButtons}>
        <a
          href="https://www.instagram.com/art_aangelina?igsh=Y2szazlhM25kcm9h"
          target="_blank"
          rel="noopener noreferrer"
          className={css.button}
        >
          <FaInstagram className={css.icon} /> Instagram
        </a>
        <a
          href="https://youtube.com/@angelinabaranovska4932?si=oS7V4QMwqh__7XzT"
          target="_blank"
          rel="noopener noreferrer"
          className={css.button}
        >
          <FaYoutube className={css.icon} /> YouTube
        </a>
        <a
          href="https://t.me/yourtelegramchannel"
          target="_blank"
          rel="noopener noreferrer"
          className={css.button}
        >
          <FaTelegramPlane className={css.icon} /> Telegram
        </a>
        <a
          href="https://www.tiktok.com/@yourtiktokprofile"
          target="_blank"
          rel="noopener noreferrer"
          className={css.button}
        >
          <FaTiktok className={css.icon} /> TikTok
        </a>
      </div>

      <NavLink to="/gallery" className={css.galleryButton}>
        <FaPaintBrush className={css.icon} /> Gallery
      </NavLink>
    </div>
  );
}
