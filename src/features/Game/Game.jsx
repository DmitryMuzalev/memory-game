import styles from './Game.module.scss';

import { useSelector } from 'react-redux';

import { getStatus } from './game-slice';

import { Header } from '../../components/Header/Header';
import { Cards } from '../../components/Cards/Cards';
import { Info } from '../../components/Info/Info';
import { Menu } from '../../components/Menu/Menu';
import { Finish } from '../../components/Finish/Finish';

function Game() {
  const gameStatus = useSelector(getStatus);

  return (
    <div className={styles.game}>
      <Header />
      <Cards />
      <Info />
      {gameStatus === 'finished' && <Finish />}
      {gameStatus === 'pause' && <Menu />}
    </div>
  );
}
export { Game };
