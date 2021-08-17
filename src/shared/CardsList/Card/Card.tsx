import React from 'react';
import styles from './card.scss';
import { MainInfo } from './MainInfo';
import { Preview } from './Preview';
import { Title } from './Title';

export function Card() {
  return (
    <li className={styles.card}>
      <article>
        <MainInfo />
        <Title />
        <Preview />
      </article>
    </li>
  );
}
