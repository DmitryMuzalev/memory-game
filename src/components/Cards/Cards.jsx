import clsx from 'clsx';
import styles from './Cards.module.scss';

import { Card } from '../Card/Card';

import { useDispatch, useSelector } from 'react-redux';
import { getSettings } from '../../features/Settings/settings-slice';
import { getCards, openCard } from '../../features/Game/game-slice';

function Cards() {
  const dispatch = useDispatch();
  const { grid } = useSelector(getSettings);
  const cardsArray = useSelector(getCards);

  const stylesForCards = clsx(
    styles.cards,
    grid === '4x4' ? styles.cardsGrid_4 : styles.cardsGrid_6
  );

  return (
    <div className={stylesForCards}>
      {cardsArray.map((item, index) => (
        <Card key={index} {...item} cb={() => dispatch(openCard(index))} />
      ))}
    </div>
  );
}
export { Cards };
