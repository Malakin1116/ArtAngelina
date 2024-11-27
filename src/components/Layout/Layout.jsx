import { Outlet } from "react-router-dom";

import css from "./Layout.module.css";
import { FaInstagram, FaYoutube } from "react-icons/fa";

import AppBar from "./AppBar/AppBar";

export default function Layout() {
  return (
    <div>
      <AppBar />
      <main>
        <Outlet />
      </main>
      <footer className={css.footer}>
        <p>
          © 2024 <span className={css.footer_brand}>ArtAngelina</span>. All
          rights reserved.
        </p>
        <nav className={css.footer_social_links}>
          <a
            href="https://www.instagram.com/art_aangelina?igsh=Y2szazlhM25kcm9h"
            target="_blank"
            rel="noopener noreferrer"
            className={css.footer_social_link}
          >
            <FaInstagram size={32} className="footer-social-icon" />
            <span>Instagram</span>
          </a>
          <a
            href="https://youtube.com/@angelinabaranovska4932?si=oS7V4QMwqh__7XzT"
            target="_blank"
            rel="noopener noreferrer"
            className={css.footer_social_link}
          >
            <FaYoutube size={32} className="footer-social-icon" />
            <span>YouTube</span>
          </a>
        </nav>
      </footer>
    </div>
  );
}
