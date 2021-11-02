import styled from 'styled-components'

// navbar styles
export const Navigation = styled.nav`
  z-index: 10;
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
  list-style: none;
  padding-top: 15px;
`

export const NavLink = styled.li`
  border-bottom: transparent solid 3px;
  padding-bottom: 15px;
  text-transform: capitalize;
  &:hover {
    border-bottom: white solid 3px;
  }
`
