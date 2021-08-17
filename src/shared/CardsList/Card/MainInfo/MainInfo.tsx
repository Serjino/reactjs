import React from 'react';
import styles from './maininfo.scss';
import { Author } from './Author';
import { PublicationDate } from './PublicationDate';
export function MainInfo() {
  return (
    <div className={styles.mainInfoWrapper}>
      <Author />
      <PublicationDate />
    </div>
  );
}
