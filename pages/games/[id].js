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

const Game = ({ game }) => {
  const {
    id,
    title,
    thumbnail,
    short_description,
    game_url,
    genre,
    platform,
    release_date,
  } = game

  return (
    <div key={id}>
      <h2>{title}</h2>
      <img src={thumbnail} alt={`Image of ${title} game`} />
      <p>
        {short_description} Available on {platform}
      </p>
      <b>Genre: {genre}</b>
    </div>
  )
}

export default Game
