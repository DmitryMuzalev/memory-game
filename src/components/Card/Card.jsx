import { useState } from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';

function Card({ icon, number }) {
  const [isOpen, setIsOpen] = useState(false);
  const mode = 'number';

  const stylesForCard = clsx(styles.card, isOpen && styles.cardOpen);

  return (
    <button className={stylesForCard} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}></div>
        <div className={styles.cardBack}>
          {mode === 'number' ? number : icon}
        </div>
      </div>
    </button>
  );
}

export { Card };
