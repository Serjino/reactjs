import React from 'react';
import styles from './rate.scss';
import { LikeBtn } from './LikeBtn';
import { RateCounter } from './RateCounter';
import { DislikeBtn } from './DislikeBtn';

export function Rate() {
  return (
    <div className={styles.wrapper}>
      <LikeBtn />
      <RateCounter />
      <DislikeBtn />
    </div>
  );
}
