import fs from 'fs';

import matter from 'gray-matter';
import React from 'react';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

import style from './Article.module.css';

type ArticleProps = {
  fontMatter: {
    title: string;
    emoji: string;
    type?: string;
    topics?: string[];
    published: boolean;
    publishedAt?: string;
  };
  content: string;
};

function Article({ fontMatter, content }: ArticleProps) {
  return (
    <>
      <Header />
      <main className={style['main-container']}>
        <p>{fontMatter.title}</p>
        <p>{fontMatter.emoji}</p>
        <p>{fontMatter.publishedAt}</p>
        <p>{content}</p>
      </main>
      <Footer />
    </>
  );
}

type Params = {
  params: { slug: string };
};

export const getStaticProps = async ({ params }: Params) => {
  const fileContent = fs.readFileSync(`articles/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(fileContent);
  console.log('data', data);
  console.log('content', content);
  return {
    props: {
      fontMatter: data,
      content,
    },
  };
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync('articles');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Article;
