import React from 'react'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://www.freetogame.com/api/games')

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
      {games.slice(300, 365).map((game) => {
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
          <div className='game' key={id}>
            <Link href={`/games/${id}`}>
              <img src={thumbnail} alt={`Image of ${title}`} />
            </Link>
            <h4>
              <Link href={`/games/${id}`}>
                <a>{title}</a>
              </Link>
            </h4>
            <p>{short_description}</p>
          </div>
        )
      })}
    </>
  )
}

export default Games
