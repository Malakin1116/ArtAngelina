import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/cart/slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdRemoveShoppingCart } from "react-icons/md";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import css from "./CartPage.module.css";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return;

    confirmAlert({
      overlayClassName: "react-confirm-alert-overlay",
      customUI: ({ onClose }) => (
        <div className={css.customConfirmModal}>
          <h3 className={css.customH3}>Remove Item</h3>
          <p className={css.customP}>
            Are you sure you want to remove <strong>{item.title}</strong> from
            the cart?
          </p>
          <div className={css.modalButtons}>
            <button
              className={css.confirmBtn}
              onClick={() => {
                dispatch(removeFromCart(id));
                toast.info(`${item.title} removed from cart`);
                onClose();
              }}
            >
              Yes, Remove
            </button>
            <button className={css.cancelBtn} onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      ),
    });
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    toast.success("Thank you for your purchase!");
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", "")) || 0;
      return total + price;
    }, 0);
  };

  return (
    <div className={css.container}>
      <ToastContainer position="top-right" style={{ marginTop: "48px" }} />
      {cart.length === 0 ? (
        <div className={css.cart}>
          <p className={css.message}>Your cart is currently empty.</p>
          <div className={css.illustration}></div>
        </div>
      ) : (
        <div className={css.cart}>
          <ul className={css.cartList}>
            {cart.map((item) => (
              <li key={item.id} className={css.cartItem}>
                <img
                  src={item.src}
                  alt={item.title}
                  className={css.itemImage}
                />
                <div className={css.itemInfo}>
                  <span className={css.itemTitle}>{item.title}</span>
                </div>
                <div className={css.itemTotal}>
                  ${parseFloat(item.price.replace("$", "")).toFixed(2)}
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className={css.removeButton}
                >
                  <MdRemoveShoppingCart className={css.icon} /> Remove
                </button>
              </li>
            ))}
          </ul>
          <div className={css.totalContainer}>
            <span className={css.totalText}>Total Price:</span>
            <span className={css.totalAmount}>
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>
          <button className={css.checkoutButton} onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
