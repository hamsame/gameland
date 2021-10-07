import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  min-width: 100%;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #00005f;
  padding: 0.3rem;
`

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 15%;
  list-style: none;
  padding-top: 15px;
`

const NavLink = styled.li`
  border-bottom: transparent solid 3px;
  padding-bottom: 15px;
  &:hover {
    border-bottom: white solid 3px;
  }
`

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
          <Link href='/'>
            <a className={router.pathname == '/' ? 'activeLink' : ''}>Third</a>
          </Link>
        </NavLink>
      </NavLinks>
    </Navigation>
  )
}

export default Navbar
