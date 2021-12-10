import styled from 'styled-components'

// navbar styles
export const Navigation = styled.nav`
  z-index: 200;
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

export const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 15%;
  text-decoration: none;
  list-style: none;
  padding-top: 15px;
  @media (max-width: 750px) {
    display: none;
  }
`

export const NavLink = styled.li`
  color: white;
  border-bottom: transparent solid 3px;
  text-transform: capitalize;
`

export const Hyperlinktag = styled.a`
  color: white;
  cursor: pointer;
`

// hamburger icon
export const HamburgerIcon = styled.span`
  display: none;
  @media (max-width: 750px) {
    display: block;
  }
`

// MobileNav
export const MobileNav = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`
