
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './gallery.module.css';

const imageFiles = [
  '/images/pic1.jpg',
  '/images/pic2.jpg',
  '/images/pic3.jpg',
  '/images/pic4.jpg',
  '/images/pic7.jpg',
  '/images/pic8.jpg',
];

export default function GallerySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="gallery-section" className={styles.galleryContainer}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Hacksync Gallery
      </motion.h1>
      
      <motion.div
        className={styles.galleryGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {imageFiles.map((filename, index) => (
          <motion.div
            key={filename}
            className={styles.imageWrapper}
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <Image
              src={`${filename}`}
              alt={`Hacksync gallery image ${index + 1}`}
              width={800}
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}