import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Navigation, NavLinks, NavLink } from './styles'

const Navbar = () => {
  const router = useRouter()
  return (
    <Navigation>
      <h3>
        <Link href='/'>GAMERLAND</Link>
      </h3>
      <NavLinks>
        <NavLink>
          <Link href='/about'>
            <a className={router.pathname == '/about' ? 'activeLink' : ''}>
              About
            </a>
          </Link>
        </NavLink>
        <NavLink>
          <Link href='/games'>
            <a className={router.pathname == '/games' ? 'activeLink' : ''}>
              Games
            </a>
          </Link>
        </NavLink>
        <NavLink>
          <Link href='/sign-up'>
            <a className={router.pathname == '/sign-up' ? 'activeLink' : ''}>
              Join
            </a>
          </Link>
        </NavLink>
      </NavLinks>
    </Navigation>
  )
}

export default Navbar
