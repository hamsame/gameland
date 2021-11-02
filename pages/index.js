import Head from 'next/head'
import Link from 'next/link'

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

      {/* div 1 */}
      <InfoArticle>
        <ArticleDiv>
          <h5>EXCLUSIVE ACCESS</h5>
          <ArticleH2>
            <Link href='/sign-up'>
              <a>early access to deals for premium members</a>
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
          src='https://images.pexels.com/photos/3905874/pexels-photo-3905874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt='Balloons indicating a sale'
        />
      </InfoArticle>

      {/* div 2 */}
      <InfoArticle flexItemDirection='row-reverse'>
        <ArticleDiv>
          <h5>COMMUNITY</h5>
          <ArticleH2>
            <Link href='/sign-up'>
              <a>PLAY & COMPETE WITH OTHERS</a>
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
          src='https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt='Two people holding playstation controllers infront of a TV'
        />
      </InfoArticle>

      {/* div 3 */}
      <InfoArticle>
        <ArticleDiv>
          <h5>COOL GAMES</h5>
          <ArticleH2>
            <Link href='/games'>
              <a>Check Out Our Cool Games</a>
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
          src='https://images.pexels.com/photos/1373100/pexels-photo-1373100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt='3 games- Missile Command, Pac-Man, and Defender'
        />
      </InfoArticle>
    </>
  )
}
