import css from "./CartPage.module.css";

export default function CartPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Shopping Cart</h1>
      <p className={css.message}>Your cart is currently empty.</p>
      <div className={css.illustration}></div>
    </div>
  );
}
