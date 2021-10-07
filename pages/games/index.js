import React from 'react'
import Image from 'next'

export const getStaticProps = async () => {
  const res = await fetch(
    'https://free-to-play-games-database.p.rapidapi.com/api/games',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '465dac8a5fmshbd444d631722ffbp1b07bbjsnbf62ddf6a9f9',
      },
    }
  )

  const data = await res.json()

  return {
    props: { games: data },
  }
}

const Games = ({ games }) => {
  console.log(games)

  return (
    <>
      <h2>All Games</h2>
      {games.map((game) => {
        // const {
        //   id,
        //   title,
        //   thumbnail,
        //   short_description,
        //   game_url,
        //   genre,
        //   platform,
        //   release_date,
        // } = game
        return (
          <div className='game' key={game.id}>
            <Image src={game.thumbnail} alt={`Image of ${game.title}`} />
            <h5>
              <a href={game.game_url}>{game.title}</a>
            </h5>
            <p>{game.short_description}</p>
          </div>
        )
      })}
    </>
  )
}

export default Games
