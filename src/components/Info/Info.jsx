import styles from './Info.module.scss';

import { useSelector } from 'react-redux';

import { SingleMode } from '../../features/SingleMode/SingleMode';
import { MultiplayerMode } from '../../features/MultiplayerMode/MultiplayerMode';

function Info() {
  const { playersQuantity } = useSelector((state) => state.settings);
  return (
    <div className={styles.info}>
      {playersQuantity === 1 ? <SingleMode /> : <MultiplayerMode />}
    </div>
  );
}

export { Info };
