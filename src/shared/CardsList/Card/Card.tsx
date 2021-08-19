import React from 'react';
import styles from './card.scss';
import { MainInfo } from './MainInfo';
import { Preview } from './Preview';
import { Title } from './Title';
import { Controls } from './Controls';
import { Menu } from './Menu';

export function Card() {
  return (
    <li className={styles.card}>
      <a href="#post-url" className={styles.postLink}></a>
        <article className={styles.article}>
          <Menu />
          <div className={styles.textWrapper}>
            <MainInfo />
            <Title />
          </div>
          <Preview />
          <Controls />
        </article>
    </li>
  );
}
