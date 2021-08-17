import React from 'react';
import styles from './avatar.scss';
import avatar from './img/avatar.png';

export function Avatar() {
  return (
    <div className={styles.wrapper}>
      <img src={avatar} className={styles.avatar}></img>
    </div>
  );
}
