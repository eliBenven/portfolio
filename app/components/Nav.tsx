"use client"; // Enables client-side functionality

import { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
        Eli Benveniste
        </Link>

        {/* Navbar Links with Contact Icon */}
        <ul className={`${styles.navList} ${isOpen ? styles.showMenu : ''}`}>
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <img src="/images/contact.png" alt="Contact Icon" className={styles.icon} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
