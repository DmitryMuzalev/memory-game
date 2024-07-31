import styles from './Header.module.scss';

import { useMediaQuery } from 'react-responsive';

import { Logo } from '../UI/Logo/Logo';
import { Button } from '../UI/Button/Button';

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
  return (
    <div className={styles.headerCTA}>
      {isMobile ? (
        <Button type="primary">menu</Button>
      ) : (
        <>
          <Button type="primary">restart</Button>
          <Button type="secondary">new game</Button>
        </>
      )}
    </div>
  );
}

export { Header };
