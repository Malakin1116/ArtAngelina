import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./MerchItemPage.module.css";
import { NavLink } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

const merchItems = [];

export default function MerchItemPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = merchItems.find((item) => item.id === parseInt(id));

  if (!item) {
    return <p>Item not found</p>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        src: item.src,
      })
    );
    toast.success(`${item.title} added to cart!`);
  };

  return (
    <div className={css.container}>
      <ToastContainer position="top-right" style={{ marginTop: "48px" }} />
      <h1 className={css.title}>ArtAngelina</h1>

      <div className={css.navContainer}>
        <NavLink to="/gallery" className={css.nav} aria-label="Gallery">
          Gallery
        </NavLink>
        <NavLink to="/merch" className={css.nav} aria-label="Merch">
          Merch
        </NavLink>
      </div>

      <div className={css.itemContainer}>
        <img src={item.src} alt={item.alt} className={css.image} />
        <h2 className={css.titleItem}>{item.title}</h2>
        <p className={css.description}>{item.description}</p>
        <span className={css.spanCart}>
          <button
            className={css.priceContainer}
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <span className={css.price}>{item.price}</span>
            <MdAddShoppingCart className={css.cartIcon} />
          </button>
        </span>
      </div>
    </div>
  );
}
