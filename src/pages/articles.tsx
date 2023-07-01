import fs from 'fs';

import { compareDesc, parse } from 'date-fns';
import matter from 'gray-matter';
import Link from 'next/link';
import React from 'react';

import { EyeCatch } from '@/components/EyeCatch/EyeCatch';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

import style from '../styles/Articles.module.css';

type Article = {
  fontMatter: {
    title: string;
    emoji: string;
    type?: string;
    topics?: string[];
    published: boolean;
    publishedAt?: string;
  };
  slug: string;
};

type ArticlesProps = {
  articles: Article[];
};

function Articles({ articles }: ArticlesProps) {
  const sortedArticles = (): Article[] => {
    return Array.from(
      articles.sort((a: Article, b: Article) => {
        const dateA = parse(
          a.fontMatter.publishedAt || '',
          'yyyy/MM/dd',
          new Date(),
        );
        const dateB = parse(
          b.fontMatter.publishedAt || '',
          'yyyy/MM/dd',
          new Date(),
        );
        return compareDesc(dateA, dateB);
      }),
    );
  };

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
            {sortedArticles().map((article) => (
              <Link
                key={article.slug}
                href={`/article/${article.slug}`}
                className={`${style.article} ${
                  !article.fontMatter.published && style.draft
                }`}
              >
                <div className={style['eye-catch-wrap']}>
                  <EyeCatch emoji={article.fontMatter.emoji} />
                </div>
                <div className={style.contents}>
                  <p className={style.title}>{article.fontMatter.title}</p>
                  {article.fontMatter.publishedAt ? (
                    <small className={style.date}>
                      {article.fontMatter.publishedAt}
                    </small>
                  ) : (
                    <small className={style.date}>公開日未設定</small>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Articles;

export const getStaticProps = async () => {
  const articleFiles = fs.readdirSync('articles');
  const articles = articleFiles.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`articles/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      fontMatter: data,
      slug,
    };
  });

  return {
    props: { articles },
  };
};
