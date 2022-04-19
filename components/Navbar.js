import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { AppContext, useGlobalContext } from './context'

function Navbar() {
  const { setSmallNav, changeNav, smallNav } = useGlobalContext()
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarWrapper}>
          <h1 onClick={() => setSmallNav(false)} className={styles.navTitle}>
            <Link href='/'>
              <a>Gamerland</a>
            </Link>
          </h1>
          <button onClick={changeNav}>
            {!smallNav ? <>&#8801;</> : <>&#x2715;</>}
          </button>
          <ul className={smallNav ? 'showLinks' : ''}>
            <li onClick={() => setSmallNav(false)}>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li onClick={() => setSmallNav(false)}>
              <Link href='/games'>
                <a>Games</a>
              </Link>
            </li>
            <li onClick={() => setSmallNav(false)}>
              <Link href='/sign-up'>
                <a>Join</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
