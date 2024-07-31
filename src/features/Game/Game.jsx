import styles from './Game.module.scss';

import { useSelector } from 'react-redux';

import { getSettings } from '../Settings/settings-slice';
import { getStatus } from './game-slice';

import { GameField } from '../../components/GameField/GameField';
import { GameFinish } from '../../components/GameFinish/GameFinish';

import { Player } from '../Player/Player';
import { Multiplayer } from '../Multiplayer/Multiplayer';
import { Header } from '../../components/Header/Header';

function Game() {
  const { players } = useSelector(getSettings);
  const gameStatus = useSelector(getStatus);

  return (
    <div className={styles.game}>
      <Header />
      <GameField />
      {players === 1 ? <Player /> : <Multiplayer />}
      {gameStatus === 'finished' && <GameFinish />}

      {/* <GameMenu /> */}
    </div>
  );
}
export { Game };
