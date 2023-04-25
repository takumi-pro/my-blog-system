import { AiFillGithub } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

import { CircleIcon } from '@/components/CircleIcon/CircleIcon';
import { Footer } from '@/components/Footer/Footer';
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
            <p>
              takumi / <span>Software Enginner</span>
            </p>
          </div>
          <div className={style['self-introduction']}>
            都内でソフトウェアエンジニアとして活動しているtakumiです。
            普段の業務ではフロント部分を触る事が多いですが、個人的にはバックエンド/インフラに軸を置いて業務をこなしていきたいと思っています。
            最近はLinuxマシンを自分で作ったり、ラズパイで遊んだりしています。ヨルシカとアジカンが好きです。
            {/* TODO: 文言検討 */}
          </div>
          <h3 className={style.heading3}>Technical Interests...</h3>
          <div className={style['each-content']}>
            <p>DevOps / SRE / Linux / Raspberry Pi / 電子工作 / 仮想通貨</p>
          </div>
          <h3 className={style.heading3}>I like...</h3>
          <div className={style['each-content']}>
            <p className={style['each-content-item']}>音楽</p>
            <p>ASIAN KUNG-FU GENERATION / ヨルシカ / MONKEY MAJIK </p>
            <p className={style['each-content-item']}>アニメ・漫画</p>
            <p>BLEACH / SAKAMOTO DAYS / マッシュル</p>
            <p className={style['each-content-item']}>小説</p>
            <p>ハリー・ポッター / ダレン・シャン / デルトラクエスト</p>
          </div>
          <h3 className={style.heading3}>Link...</h3>
          <div className={style['each-content']}>
            <div className={style['link-wrap']}>
              <span className={style['icon-wrap']}>
                <AiFillGithub className={style['github']} />
              </span>
              <a href="https://github.com/takumi-pro">@takumi-pro</a>
            </div>
            <div className={style['link-wrap']}>
              <span className={style['icon-wrap']}>
                <BsTwitter className={style.twitter} />
              </span>
              <a href="https://twitter.com/takumidiary">@takumidialy</a>
            </div>
            <div className={style['link-wrap']}>
              <span className={style['icon-wrap']}>
                <SiLeetcode className={style['leetcode']} />
              </span>
              <a href="https://leetcode.com/takumi_iga/">@takumi_iga</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
