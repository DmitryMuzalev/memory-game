import styles from './Game.module.scss';

import { useSelector } from 'react-redux';

import { getStatus } from './game-slice';

import { GameFinish } from '../../components/GameFinish/GameFinish';

import { Header } from '../../components/Header/Header';
import { Cards } from '../../components/Cards/Cards';
import { Info } from '../../components/Info/Info';

function Game() {
  const gameStatus = useSelector(getStatus);

  return (
    <div className={styles.game}>
      <Header />
      <Cards />
      <Info />
      {gameStatus === 'finished' && <GameFinish />}

      {/* <GameMenu /> */}
    </div>
  );
}
export { Game };
