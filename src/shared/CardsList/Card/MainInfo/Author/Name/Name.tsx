import React from 'react';
import styles from './name.scss';

export function Name() {
  return (
    <h3 className={styles.name}>
      <a href="#user-url" className={styles.link}>Виктор Пылёв</a>
    </h3>
  );
}
