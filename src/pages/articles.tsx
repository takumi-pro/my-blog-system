import React from 'react';

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
            <div className={style.article}>
              <div className={style['eye-catch']}></div>
              <div className={style.contents}>
                <p className={style.title}>
                  NextとmicroCMSでブログ開発してみた
                </p>
                <small className={style.date}>2023/4/20</small>
              </div>
            </div>
            <div className={style.article}>
              <div className={style['eye-catch']}></div>
              <div className={style.contents}>
                <p className={style.title}>
                  NextとmicroCMSでブログ開発してみた
                </p>
                <small className={style.date}>2023/4/20</small>
              </div>
            </div>
            <div className={style.article}>
              <div className={style['eye-catch']}></div>
              <div className={style.contents}>
                <p className={style.title}>
                  NextとmicroCMSでブログ開発してみた
                </p>
                <small className={style.date}>2023/4/20</small>
              </div>
            </div>
            <div className={style.article}>
              <div className={style['eye-catch']}></div>
              <div className={style.contents}>
                <p className={style.title}>
                  NextとmicroCMSでブログ開発してみた
                </p>
                <small className={style.date}>2023/4/20</small>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Articles;
