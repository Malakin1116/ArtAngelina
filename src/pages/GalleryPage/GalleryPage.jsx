import { Link } from "react-router-dom";
import css from "./GalleryPage.module.css";

const images = [
  { id: 1, src: "/ArtGallary/Zip/art1.jpg", alt: "Image 1", title: "Love" },
  { id: 2, src: "/ArtGallary/Zip/art2.jpg", alt: "Image 2", title: "Outbreak" },
  {
    id: 3,
    src: "/ArtGallary/Zip/art3.jpg",
    alt: "Image 3",
    title: "What’s inside?",
  },
  {
    id: 4,
    src: "/ArtGallary/Zip/art4.jpg",
    alt: "Image 4",
    title: "Love story",
  },
  {
    id: 5,
    src: "/ArtGallary/Zip/art5.jpg",
    alt: "Image 5",
    title: "Favorite dirty thought",
  },
  { id: 6, src: "/ArtGallary/Zip/art6.jpg", alt: "Image 6", title: "Desert" },
];

export default function GalleryPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Gallery</h1>

      <div className={css.grid}>
        {images.map((image) => (
          <Link key={image.id} to={`/gallery/${image.id}`} className={css.card}>
            <img src={image.src} alt={image.alt} className={css.image} />
          </Link>
        ))}
      </div>
    </div>
  );
}
