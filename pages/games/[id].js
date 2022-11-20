import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import { PageText } from "../../components/styledComponents/gamePageStyles"

export const getStaticPaths = async () => {
  const res = await fetch("https://www.freetogame.com/api/games")
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
        <meta name="description" content={short_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article key={id} className="gamePage">
        <Image
          width={542}
          height={306}
          src={thumbnail}
          alt={`Image of ${title} game`}
        />
        {screenshots.map((img) => (
          <Image
            width={542}
            height={306}
            src={img.image}
            key={img.id}
            alt={`Screenshot of ${title} game`}
          />
        ))}
        <h2>
          <a href={game_url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>
        <PageText>
          {description} (Available on {platform})
          <div>
            <Link href={"/games"}>
              <a>Go Back</a>
            </Link>
          </div>
        </PageText>
      </article>
    </>
  )
}

export default GamePage
