import { AiFillGithub } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';

import { CircleIcon } from '@/components/CircleIcon/CircleIcon';
import { Header } from '@/components/Header/Header';

import style from '../styles/Home.module.css';

export default function Home() {
  const imageStyle = {
    width: '80px',
    height: '80px',
  };
  return (
    <>
      <Header />
      <main className={style['main-container']}>
        <div className={style['main-inner']}>
          <div className={style['self-name-container']}>
            <CircleIcon imageStyle={imageStyle} />
            <p>Takumi / Software Enginner</p>
          </div>
          <div className={style['self-introduction']}>
            都内のIT企業でソフトウェアエンジニアをしているtakumiです。
            {/* TODO: 文言検討 */}
          </div>
          <h3 className={style.heading3}>Link</h3>
          <div className={style['each-content']}>
            <AiFillGithub />
            <BsTwitter />
          </div>
        </div>
      </main>
    </>
  );
}
