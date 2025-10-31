import Image from 'next/image';
import styles from './gallery.module.css';

const imageFiles = [
  'pic1.jpg', // Replace with your actual image filenames
  'pic2.jpg',
  'pic3.jpg',
  'pic4.jpg',
  'pic5.jpg',
  'pic6.jpg',
];

export default function GallerySection() {
  return (
    <section id="gallery-section" className={styles.galleryContainer}>
      <h1 className={styles.title}>Hacksync Gallery</h1>
      <div className={styles.galleryGrid}>
        {imageFiles.map((filename) => (
          <div key={filename} className={styles.imageWrapper}>
            <Image
              src={`/gallery/${filename}`} // The path starts from the 'public' folder
              alt={`Hacksync gallery image ${filename}`}
              width={800} // Set the actual width of your original image file
              height={500} // Set the actual height of your original image file
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes for performance
              style={{ width: '100%', height: 'auto' }} // Ensure image scales
            />
          </div>
        ))}
      </div>
    </section>
  );
}