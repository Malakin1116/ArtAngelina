import css from "./GalleryPage.module.css";

export default function GalleryPage() {
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

  return (
    <div className={css.container}>
      <h1 className={css.title}>Gallery</h1>
      <div className={css.grid}>
        {images.map(({ id, src, alt, title, price, description }) => (
          <div key={id} className={css.card}>
            <img src={src} alt={alt} className={css.image} />
            <div className={css.info}>
              <h2 className={css.title}>{title}</h2>
              <p className={css.price}>{price}</p>
              <p className={css.description}>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
