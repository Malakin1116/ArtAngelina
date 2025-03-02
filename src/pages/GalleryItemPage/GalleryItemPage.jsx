import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import css from "./GalleryItemPage.module.css";
import { NavLink } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { IoMdClose } from "react-icons/io"; // Іконка закриття

const images = [
  {
    id: 1,
    src: "/ArtGallary/Zip/art1.jpg",
    alt: "Image 1",
    title: "Love",
    price: "$900",
    description:
      "Year of creation: 2021. Dimensions: 50x60 cm. Material: cotton canvas, acrylic, oil, acrylic enamel, acrylic varnish.",
  },
  {
    id: 2,
    src: "/ArtGallary/Zip/art2.jpg",
    alt: "Image 2",
    title: "Outbreak",
    price: "$750",
    description:
      "Year of creation: 2020. Dimensions: 50x60 cm. Material: cotton canvas, acrylic, acrylic varnish.",
  },
  {
    id: 3,
    src: "/ArtGallary/Zip/art3.jpg",
    alt: "Image 3",
    title: "What’s inside?",
    price: "$800",
    description:
      "Year of creation: 2021.Dimensions: 50x60 cm. Material: cotton canvas, oil, acrylic enamel.",
  },
  {
    id: 4,
    src: "/ArtGallary/Zip/art4.jpg",
    alt: "Image 4",
    title: "Love story",
    price: "$900",
    description:
      "Year of creation: 2024. Dimensions: 50x60 cm. Material: cotton canvas, acrylic, acrylic enamel, acrylic varnish.",
  },
  {
    id: 5,
    src: "/ArtGallary/Zip/art5.jpg",
    alt: "Image 5",
    title: "Favorite dirty thought",
    price: "$650",
    description:
      "Year of creation: 2024. Dimensions: 40x40 cm. Material: cotton canvas, acrylic, acrylic enamel.",
  },
  {
    id: 6,
    src: "/ArtGallary/Zip/art6.jpg",
    alt: "Image 6",
    title: "Desert",
    price: "$800",
    description:
      "Year of creation: 2024. Dimensions: 50x70 cm. Material: cotton canvas, acrylic, acrylic enamel, decorative glitter, acrylic varnish.",
  },
];

export default function GalleryItemPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const image = images.find((img) => img.id === parseInt(id));

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Блокуємо прокрутку сторінки при відкритті модалки
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  if (!image) {
    return <p>Item not found</p>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: image.id,
        title: image.title,
        price: image.price,
        src: image.src,
      })
    );
    toast.success(`${image.title} added to cart!`);
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
        <img
          src={image.src}
          alt={image.alt}
          className={css.image}
          onClick={() => setIsModalOpen(true)}
        />
        <h2 className={css.titleItem}>{image.title}</h2>
        <p className={css.description}>{image.description}</p>
        <span className={css.spanCart}>
          <button
            className={css.priceContainer}
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <span className={css.price}>{image.price}</span>
            <MdAddShoppingCart className={css.cartIcon} />
          </button>
        </span>
      </div>

      {isModalOpen && (
        <div className={css.modalOverlay}>
          <div className={css.modalContent}>
            <button
              className={css.closeButton}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <IoMdClose className={css.closeIcon} />
            </button>
            <img src={image.src} alt={image.alt} className={css.modalImage} />
          </div>
        </div>
      )}
    </div>
  );
}
