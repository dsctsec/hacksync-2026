// app/components/StatsSection.jsx
"use client"; // Add this line at the top, it's required for this component to be interactive

import styles from './stats.module.css';
import CountUp from 'react-countup'; // Import the counter

export default function StatsSection() {
  
  // We've changed 'value' to be a number
  // and added 'prefix', 'suffix', and 'separator'
  const stats = [
    { id: 1, label: 'Projects Made', value: 45, suffix: '+' },
    { id: 2, label: 'Registration', value: 500, suffix: '+' },
    { id: 3, label: 'Prize Pool', value: 60000, prefix: '₹', separator: ',' },
    { id: 4, label: 'Cities', value: 5, suffix: '+' },
  ];

  return (
    <section id="stats-section" className={styles.statsContainer}>
      <h1 className={styles.title}>Hacksync Ledger</h1>
      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.id} className={styles.statCard}>
            
            {/* --- REPLACED SPAN WITH COUNTUP COMPONENT --- */}
            <CountUp
              className={styles.statValue}
              start={0}
              end={stat.value}
              duration={2.5}
              prefix={stat.prefix || ''}
              suffix={stat.suffix || ''}
              separator={stat.separator || ''}
              enableScrollSpy={true} // This makes it count when you scroll to it!
              scrollSpyOnce={false} // Only count once
            />
            {/* --- END OF COUNTUP --- */}
            
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}