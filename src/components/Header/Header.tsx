import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import style from './Header.module.css';
import topImage from '../../images/takumi.png';

export const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <Image src={topImage} alt="top-image..." />
      </div>
      <nav>
        <ul>
          <li>
            <Link href={'#'}>Article</Link>
          </li>
          <li>
            <Link href={'#'}>About</Link>
          </li>
          <li>
            <Link href={'#'}>Works</Link>
          </li>
        </ul>
      </nav>
      <div>dark/light icon</div>
    </header>
  );
};
