import styles from './Card.module.scss';
import clsx from 'clsx';

import { useSelector } from 'react-redux';
import { getSettings } from '../../features/Settings/settings-slice';

function Card({ number, icon, status, cb }) {
  const { theme } = useSelector(getSettings);
  const stylesForCard = clsx(styles.card, status === 'open' && styles.cardOpen);

  return (
    <button
      className={stylesForCard}
      onClick={cb}
      disabled={status === 'guessed'}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}></div>
        <div className={styles.cardBack}>
          {theme === 'numbers' ? number : icon}
        </div>
      </div>
    </button>
  );
}

export { Card };
