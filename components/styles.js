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

//   /games page styles
export const Grid = styled.div`
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

export const Game = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 12px;
  flex-direction: column;
  @media (max-width: 750px) {
    align-content: center;
  }
`

export const Heading2 = styled.h2`
  display: inline-block;
  margin: 3vh 1%;
`

// /games[id] page
export const PageText = styled.p`
  margin: 0 0 2vh 0%;
  line-height: 2;
`

// Contact Page
// Modal Message
export const ModalMessage = styled.h5`
  color: ${(props) => props.color};
`
