import React from 'react';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function Header(){
  return (
    <header className={styles.header}>
<div className={styles.header_content}>
    <FontAwesomeIcon icon={faBars} className={styles.menuIcon}/>
      <h1>Lottery</h1>
      </div>
    </header>
  );
};

