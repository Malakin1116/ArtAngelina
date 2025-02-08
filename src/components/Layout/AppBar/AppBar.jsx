import Navigation from "./Navigation/Navigator";

import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
}
