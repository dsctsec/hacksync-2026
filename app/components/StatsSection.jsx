import styles from './stats.module.css';

export default function StatsSection() {
  
  const stats = [
    { id: 1, label: 'Bounties Collected (Projects)', value: '45+' },
    { id: 2, label: 'Outlaws Registered (Hackers)', value: '300+' },
    { id: 3, label: 'Prize Pool', value: '₹1,00,000' },
    { id: 4, label: 'Saloons (Colleges)', value: '50+' },
  ];

  return (
    <section id="stats-section" className={styles.statsContainer}>
      <h1 className={styles.title}>Hacksync Ledger</h1>
      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.id} className={styles.statCard}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}