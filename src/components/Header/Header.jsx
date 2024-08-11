import styles from './Header.module.scss';

import { useMediaQuery } from 'react-responsive';

import { Logo } from '../UI/Logo/Logo';
import { Button } from '../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { showMenu } from '../../features/Menu/menu-slice';
import { resetToDefault } from '../../utils/root-actions';
import { restartGame } from '../../features/Game/game-slice';

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <HeaderCTA />
    </header>
  );
}

function HeaderCTA() {
  const isMobile = useMediaQuery({ query: '(max-width: 540px)' });

  const dispatch = useDispatch();

  return (
    <div className={styles.headerCTA}>
      {isMobile ? (
        <Button type="primary" cb={() => dispatch(showMenu())}>
          menu
        </Button>
      ) : (
        <>
          <Button
            type="primary"
            cb={() => {
              dispatch(restartGame());
            }}
          >
            restart
          </Button>
          <Button
            type="secondary"
            cb={() => {
              dispatch(resetToDefault());
            }}
          >
            new game
          </Button>
        </>
      )}
    </div>
  );
}

export { Header };
