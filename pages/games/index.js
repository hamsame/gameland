import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/LinkStyles.module.css'

import {
  Grid,
  Game,
  Heading2,
} from '../../components/styledComponents/gamePageStyles'

export const getStaticProps = async () => {
  const res = await fetch('https://www.freetogame.com/api/games')
  const data = await res.json()
  return {
    props: { games: data },
  }
}

const filterGames = () => {
  let i = 0
  document.querySelector('#filter').addEventListener('keyup', (e) => {
    const filterText = e.target.value.toLowerCase()

    for (i of document.querySelectorAll('.game')) {
      const gameName = i.children[1].firstChild.firstChild.textContent
      gameName.toLowerCase().indexOf(filterText) != -1
        ? (i.style.display = 'block')
        : (i.style.display = 'none')
    }
  })
}

const Games = ({ games }) => {
  React.useEffect(() => {
    filterGames()
  }, [])
  return (
    <>
      <Head>
        <title>Gamerland | Free Games</title>
        <meta name='description' content='Gamerland- The place for gamers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Heading2 className='themedTitle'>All Games</Heading2>
      <div className='form-control' style={{ margin: '0 0 0 1%' }}>
        <br />
        <label htmlFor='filter'>Search:</label>
        <br />
        <input
          type='text'
          id='filter'
          autoComplete='off'
          style={{
            width: '80%',
            margin: '2vh auto',
            padding: '0.25rem',
            borderRadius: '6px',
            borderWidth: '1px',
          }}
        />
      </div>
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
                  <a className={styles.gamepageLink}>{title}</a>
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
