import css from "./GalleryPage.module.css";

export default function GalleryPage() {
  const images = [
    { id: 1, src: "https://via.placeholder.com/300x200", alt: "Image 1" },
    { id: 2, src: "https://via.placeholder.com/300x200", alt: "Image 2" },
    { id: 3, src: "https://via.placeholder.com/300x200", alt: "Image 3" },
    { id: 4, src: "https://via.placeholder.com/300x200", alt: "Image 4" },
    { id: 5, src: "https://via.placeholder.com/300x200", alt: "Image 5" },
    { id: 6, src: "https://via.placeholder.com/300x200", alt: "Image 6" },
  ];

  return (
    <div className={css.container}>
      <h1 className={css.title}>Gallery</h1>
      <div className={css.grid}>
        {images.map((image) => (
          <div key={image.id} className={css.card}>
            <img src={image.src} alt={image.alt} className={css.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
