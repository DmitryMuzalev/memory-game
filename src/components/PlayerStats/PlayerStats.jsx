import { clsx } from 'clsx';
import styles from './PlayerStats.module.scss';

function PlayerStats({ name, score, isActive = false }) {
  const stylesForPlayerStats = clsx(
    styles.playerStats,
    isActive && styles.playerStatsActive
  );

  return (
    <div className={stylesForPlayerStats}>
      <span className={styles.playerStatsName}>{name}</span>
      <span className={styles.playerStatsScore}>{score}</span>
    </div>
  );
}
export { PlayerStats };
