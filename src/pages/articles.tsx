import Link from 'next/link';
import React from 'react';

import { EyeCatch } from '@/components/EyeCatch/EyeCatch';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

import style from '../styles/Articles.module.css';

function Articles() {
  return (
    <>
      <Header />
      <main className={style['articles-main-container']}>
        <div className={style['articles-main-inner']}>
          <h2 className={style['page-title']}>Articles</h2>
          <div className={style['category-container']}>
            ここにカテゴリが入るよ
          </div>
          <div className={style['articles-container']}>
            <Link href={'#'} className={style.article}>
              <div className={style['eye-catch-wrap']}>
                <EyeCatch emoji="📝" />
              </div>
              <div className={style.contents}>
                <p className={style.title}>DDNSについて復習</p>
                <small className={style.date}>2023/4/20</small>
              </div>
            </Link>
            <Link href={'#'} className={style.article}>
              <div className={style['eye-catch-wrap']}>
                <EyeCatch emoji="㊗️" />
              </div>
              <div className={style.contents}>
                <p className={style.title}>〇〇に合格しました</p>
                <small className={style.date}>2023/4/20</small>
              </div>
            </Link>
            <Link href={'#'} className={style.article}>
              <div className={style['eye-catch-wrap']}>
                <EyeCatch emoji="💻" />
              </div>
              <div className={style.contents}>
                <p className={style.title}>
                  【Next.js】Next.jsとmicroCMSを使って自作ブログを構築してみたら案外簡単でとても驚いた話
                </p>
                <small className={style.date}>2023/4/20</small>
              </div>
            </Link>
            <Link href={'#'} className={style.article}>
              <div className={style['eye-catch-wrap']}>
                <EyeCatch emoji="📝" />
              </div>
              <div className={style.contents}>
                <p className={style.title}>DDNSについて復習</p>
                <small className={style.date}>2023/4/20</small>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Articles;
