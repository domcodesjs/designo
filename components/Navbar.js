import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles['nav']}>
      <Link href='/'>
        <img
          className={styles['nav__logo']}
          src='/static/shared/desktop/logo-dark.png'
          alt='Logo'
        />
      </Link>
      <button className={styles['nav__mobile-open']}>
        <img src='/static/shared/mobile/icon-hamburger.svg' alt='Menu' />
      </button>
    </nav>
  );
};

export default Navbar;
