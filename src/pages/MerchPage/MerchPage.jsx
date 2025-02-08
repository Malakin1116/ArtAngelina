import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "./MerchPage.module.css";

const merchItems = [];

export default function MerchPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>ArtAngelina Merch</h1>

      <div className={css.navContainer}>
        <NavLink to="/gallery" className={css.nav} aria-label="Gallery">
          Gallery
        </NavLink>
        <NavLink to="/merch" className={css.nav} aria-label="Merch">
          Merch
        </NavLink>
      </div>

      <div className={css.grid}>
        {merchItems.map((item) => (
          <Link key={item.id} to={`/merch/${item.id}`} className={css.card}>
            <img src={item.src} alt={item.alt} className={css.image} />
          </Link>
        ))}
      </div>
    </div>
  );
}
