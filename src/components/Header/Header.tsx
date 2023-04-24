import Link from 'next/link';
import React from 'react';

import style from './Header.module.css';
import ChangeThemeButton from '../ChangeThemeButton/ChangeThemeButton';
import { CircleIcon } from '../CircleIcon/CircleIcon';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style['header-inner']}>
        <div className={style['left-side-container']}>
          <CircleIcon />
          <nav className={style.nav}>
            <ul className={style['list-container']}>
              <li>
                <Link className={style.link} href={'/articles'}>
                  article
                </Link>
              </li>
              <li>
                <Link className={style.link} href={'#'}>
                  about
                </Link>
              </li>
              <li>
                <Link className={style.link} href={'#'}>
                  works
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <ChangeThemeButton />
      </div>
    </header>
  );
};
