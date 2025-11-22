
"use client";

import styles from './stats.module.css';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

function Counter({ value, prefix = '', suffix = '', separator = '' }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, motionValue, value]);

  const rounded = useTransform(motionValue, (latest) => {
    const num = Math.round(latest);
    return `${prefix}${separator ? num.toLocaleString() : num}${suffix}`;
  });

  return (
    <motion.span ref={ref} className={styles.statValue}>
      {rounded}
    </motion.span>
  );
}

export default function StatsSection() {
  const stats = [
    { id: 1, label: 'Projects Made', value: 45, suffix: '+' },
    { id: 2, label: 'Registration', value: 500, suffix: '+' },
    // { id: 3, label: 'Prize Pool', value: 60000, prefix: '₹', separator: ',' },
    { id: 4, label: 'Cities', value: 5, suffix: '+' },
  ];

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
    hidden: { opacity: 0, y: 30 },
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
    <section id="stats-section" className={styles.statsContainer}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        
      >
        Hacksync Ledger
      </motion.h1>
      
      <motion.div
        className={styles.statsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className={styles.statCard}
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <Counter
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              separator={stat.separator}
            />
            <span className={styles.statLabel}>{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}