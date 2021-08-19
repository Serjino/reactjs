import React, { useState } from 'react';
import styles from './menu.scss';
import { MouseEvent } from 'react'

export function Menu() {

  let [isOpen, setIsOpen] = useState(false);

  function openMenu (e: MouseEvent<HTMLButtonElement>) {
    let target = e.currentTarget as HTMLElement;
      setIsOpen((prevState) => isOpen = !prevState);
      target.classList.toggle(styles.menuOpened);
  }

  return (
    <button className={styles.menuBtn} onClick={(e) => openMenu(e)}>
      <span className={styles.point}></span>
      <span className={styles.point}></span>
      <span className={styles.point}></span>
    </button>
  );
}


