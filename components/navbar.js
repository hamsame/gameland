import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Navigation,
  NavLinks,
  NavLink,
  Hyperlinktag,
  MobileNav,
  HamburgerIcon,
} from './styledComponents/navStyles'

const Navbar = () => {
  const router = useRouter()
  const [smallNav, setSmallNav] = useState(false)

  const changeIcon = () => {
    smallNav
      ? (document.querySelector('.mobile-nav').innerHTML = '&#8801;')
      : (document.querySelector('.mobile-nav').innerHTML = '&#x2715')
  }

  const showMobileNav = () => {
    smallNav == false ? setSmallNav(true) : setSmallNav(false)
    changeIcon()
  }

  const closeMobileNav = () => {
    setSmallNav(false)
    document.querySelector('.mobile-nav').innerHTML = '&#8801;'
  }

  return (
    <>
      <Navigation>
        <h3>
          <Link href='/'>
            <Hyperlinktag>GAMERLAND</Hyperlinktag>
          </Link>
        </h3>
        <NavLinks>
          <NavLink>
            <Link href='/about'>
              <Hyperlinktag
                className={router.pathname == '/about' ? 'activeLink' : ''}
              >
                About
              </Hyperlinktag>
            </Link>
          </NavLink>

          <NavLink>
            <Link href='/games'>
              <Hyperlinktag
                className={
                  router.pathname == '/games' ||
                  router.pathname == '/games/[id]'
                    ? 'activeLink'
                    : ''
                }
              >
                Games
              </Hyperlinktag>
            </Link>
          </NavLink>
          <NavLink>
            <Link href='/sign-up'>
              <Hyperlinktag
                className={router.pathname == '/sign-up' ? 'activeLink' : ''}
              >
                Join
              </Hyperlinktag>
            </Link>
          </NavLink>
        </NavLinks>
        <HamburgerIcon
          className='mobile-nav'
          onClick={() => showMobileNav()}
          style={{ fontSize: '2rem', cursor: 'pointer' }}
        >
          &#8801;
        </HamburgerIcon>
      </Navigation>
      {/* mobile navigation (only shown when size is small) */}
      {smallNav && (
        <MobileNav
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            fontSize: '2rem',
            gap: '30%',
            alignItems: 'center',
            marginTop: '-15vh',
            height: '100%',
            width: '100%',
            background: '#00005f',
            color: 'white',
            zIndex: '100',
            position: 'fixed',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
            }}
          >
            <li>
              <Link href='/'>
                <Hyperlinktag onClick={() => closeMobileNav()}>
                  Home
                </Hyperlinktag>
              </Link>
            </li>
            <li style={{ margin: '15vh 0' }}>
              <Link href='/about'>
                <Hyperlinktag onClick={() => closeMobileNav()}>
                  About
                </Hyperlinktag>
              </Link>
            </li>
            <li style={{ margin: '15vh 0' }}>
              <Link href='/games' onClick={() => closeMobileNav()}>
                <Hyperlinktag onClick={() => closeMobileNav()}>
                  Games
                </Hyperlinktag>
              </Link>
            </li>
            <li>
              <Link href='/sign-up' onClick={() => closeMobileNav()}>
                <Hyperlinktag onClick={() => closeMobileNav()}>
                  Join
                </Hyperlinktag>
              </Link>
            </li>
          </ul>
        </MobileNav>
      )}
    </>
  )
}

export default Navbar
