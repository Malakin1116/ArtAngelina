import css from "./ProfilePage.module.css";

export default function ProfilePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>User Profile</h1>
      <div className={css.avatar}></div>
      <p className={css.message}>This section is under development.</p>
    </div>
  );
}
