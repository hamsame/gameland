import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/LinkStyles.module.css'

import {
  InfoArticle,
  ArticleDiv,
  ArticleH2,
  ArticleText,
  ArticleLink,
  ArticleImage,
} from '../components/styledComponents/homePageStyles'

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Gamerland</title>
          <meta name='description' content='Gamerland- The place for gamers' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
      </div>

      <InfoArticle>
        <ArticleDiv>
          <ArticleH2>
            <Link href='/sign-up'>
              <a className={styles.homepageLink}>
                early access to deals for premium members
              </a>
            </Link>
          </ArticleH2>
          <ArticleText>
            Get access to a range of games, add-ons and much more earlier than
            others.
          </ArticleText>
          <Link href='/sign-up'>
            <ArticleLink>SIGN UP</ArticleLink>
          </Link>
        </ArticleDiv>
        <ArticleImage
          src='/images/balloons.jpeg'
          alt='Balloons indicating a sale'
        />
      </InfoArticle>

      <InfoArticle flexItemDirection='row-reverse'>
        <ArticleDiv>
          <ArticleH2>
            <Link href='/sign-up'>
              <a className={styles.homepageLink}>PLAY & COMPETE WITH OTHERS</a>
            </Link>
          </ArticleH2>
          <ArticleText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            sapiente.
          </ArticleText>
          <Link href='/sign-up'>
            <ArticleLink>SIGN UP</ArticleLink>
          </Link>
        </ArticleDiv>
        <ArticleImage
          src='/images/controllers.jpeg'
          alt='Two people holding playstation controllers infront of a TV'
        />
      </InfoArticle>

      <InfoArticle>
        <ArticleDiv>
          <ArticleH2>
            <Link href='/games'>
              <a className={styles.homepageLink}>Check Out Our Cool Games</a>
            </Link>
          </ArticleH2>
          <ArticleText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            sapiente.
          </ArticleText>
          <Link href='/games'>
            <ArticleLink>OUR GAMES</ArticleLink>
          </Link>
        </ArticleDiv>
        <ArticleImage
          src='/images/classics.jpeg'
          alt='3 games- Missile Command, Pac-Man, and Defender'
        />
      </InfoArticle>
    </>
  )
}
