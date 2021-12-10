import Link from 'next/link'
import Head from 'next/head'
import { PageText } from '../../components/styledComponents/gamePageStyles'

export const getStaticPaths = async () => {
  const res = await fetch('https://www.freetogame.com/api/games')
  const data = await res.json()

  const paths = data.map((game) => {
    return {
      params: { id: game.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://www.freetogame.com/api/game?id=${id}`)
  const data = await res.json()

  return {
    props: { game: data },
  }
}

const GamePage = ({ game }) => {
  const {
    id,
    title,
    thumbnail,
    description,
    short_description,
    game_url,
    screenshots,
    platform,
  } = game

  return (
    <>
      <Head>
        <title>Gamerland | {title}</title>
        <meta name='description' content={short_description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <article key={id} style={{ margin: '9.5%' }}>
        <img
          style={{ width: '60%' }}
          src={thumbnail}
          alt={`Image of ${title} game`}
        />
        <br />
        {screenshots.map((img) => (
          <img
            style={{ width: '30%', margin: '3vh 2% 0 0%' }}
            src={img.image}
            key={img.id}
            alt={`Screenshot of ${title} game`}
          />
        ))}
        <h2>
          <a href={game_url}>{title}</a>
        </h2>
        <PageText>
          {description} <br />
          <br /> Available on {platform}
        </PageText>
        <Link href={'/games'}>
          <a>Go Back</a>
        </Link>
      </article>
    </>
  )
}

export default GamePage
