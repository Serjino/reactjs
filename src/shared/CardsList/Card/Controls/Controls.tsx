import React from 'react';
import styles from './controls.scss';
import { Rate } from './Rate';
import { Comments } from './Comments';
import { Share } from './Share';
import { Save } from './Save';

export function Controls() {
  return (
    <div className={styles.wrapper}>
      <Rate />
      <Comments />
      <Share />
      <Save />
    </div>
  );
}
