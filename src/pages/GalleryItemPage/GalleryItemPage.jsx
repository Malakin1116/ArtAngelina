import { useParams, useNavigate } from "react-router-dom";
import css from "./GalleryItemPage.module.css";

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
    price: "$999",
    description:
      "Year of creation: 2024. Dimensions: 50x70 cm. Material: cotton canvas, acrylic, acrylic enamel, decorative glitter, acrylic varnish.",
  },
];

export default function GalleryItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const image = images.find((img) => img.id === parseInt(id));

  if (!image) {
    return <p>Item not found</p>;
  }

  return (
    <div className={css.container}>
      <button className={css.backButton} onClick={() => navigate(-1)}>
        ← Back
      </button>
      <img src={image.src} alt={image.alt} className={css.image} />
      <h2 className={css.title}>{image.title}</h2>
      <p className={css.description}>{image.description}</p>
      <p className={css.price}>{image.price}</p>
    </div>
  );
}
