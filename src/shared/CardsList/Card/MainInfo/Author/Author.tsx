import React from 'react';
import styles from './author.scss';
import { Avatar } from './Avatar';
import { Name } from './Name';

export function Author() {
  return (
    <div className={styles.wrapper}>
      <Avatar />
      <Name />
    </div>
  );
}
