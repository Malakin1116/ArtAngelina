import css from "./GalleryPage.module.css";

export default function GalleryPage() {
  const images = [
    "/ArtGallary/Zip/art1.jpg",
    "/ArtGallary/Zip/art2.jpg",
    "/ArtGallary/Zip/art3.jpg",
    "/ArtGallary/Zip/art4.jpg",
    "/ArtGallary/Zip/art5.jpg",
    "/ArtGallary/Zip/art6.jpg",
  ];

  return (
    <div className={css.container}>
      <h1 className={css.title}>Gallery</h1>
      <div className={css.grid}>
        {images.map((src, index) => (
          <div key={index} className={css.card}>
            <img src={src} alt={`Image ${index + 1}`} className={css.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
