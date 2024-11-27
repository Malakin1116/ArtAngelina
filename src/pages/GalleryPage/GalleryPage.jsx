import css from "./GalleryPage.module.css";

export default function GalleryPage() {
  const images = [
    { id: 1, src: "/ArtGallary/Zip/art1.jpg", alt: "Image 1" },
    { id: 2, src: "/ArtGallary/Zip/art2.jpg", alt: "Image 2" },
    { id: 3, src: "/ArtGallary/Zip/art3.jpg", alt: "Image 3" },
    { id: 4, src: "/ArtGallary/Zip/art4.jpg", alt: "Image 4" },
    { id: 5, src: "/ArtGallary/Zip/art5.jpg", alt: "Image 5" },
    { id: 6, src: "/ArtGallary/Zip/art6.jpg", alt: "Image 6" },
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
