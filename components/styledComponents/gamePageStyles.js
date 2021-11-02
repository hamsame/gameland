import styled from 'styled-components'

// games page styles
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
