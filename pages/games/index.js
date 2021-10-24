import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Grid = styled.div`
  width: 98%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, auto);
  gap: 1rem;
  @media (max-width: 1150px) {
    grid-template-columns: auto auto;
    gap: 0.5rem;
  }
  @media (max-width: 750px) {
    grid-template-columns: auto;
  }
`

const Game = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 12px;
  flex-direction: column;
  @media (max-width: 750px) {
    align-content: center;
  }
`

const Heading2 = styled.h2`
  display: inline-block;
  margin: 3vh 1%;
`

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
      <Head>
        <title>Gamerland | Free Games</title>
        <meta name='description' content='Gamerland- The place for gamers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Heading2>All Games</Heading2>
      <Grid cols='3'>
        {games.slice(299, 365).map((game) => {
          const { id, title, thumbnail, short_description } = game

          return (
            <Game className='game' key={id}>
              <Link href={`/games/${id}`}>
                <a>
                  <img src={thumbnail} alt={`Image of ${title}`} />
                </a>
              </Link>
              <h4>
                <Link href={`/games/${id}`}>
                  <a style={{ textAlign: 'center' }} className='underline'>
                    {title}
                  </a>
                </Link>
              </h4>
              <p>{short_description}</p>
            </Game>
          )
        })}
      </Grid>
    </>
  )
}

export default Games
