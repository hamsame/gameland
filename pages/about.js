import Head from 'next/head'
import Navbar from '../components/navbar'
import styled from 'styled-components'

import {
  InfoArticle,
  ArticleDiv,
  ArticleH2,
  ArticleText,
  ArticleImage,
} from '../components/styledComponents/homePageStyles'

const Banner = styled.div`
  margin: -5vh auto -20vh;
  width:100%
  height:90vh;
  color: black;
  display: flex;
  flex-direction: column;
  align-content:space-between;
  justify-content: flex-start;
`

const BannerDiv = styled.div`
  color: #00005f;
  width: 86%;
  margin: 0 auto !important;
  padding: 5rem 0;
`

export default function About() {
  return (
    <>
      <Head>
        <title>Gamerland | About</title>
        <meta name='description' content='Gamerland- A website for gamers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      <main>
        <Banner>
          <BannerDiv>
            <h1>About Us</h1>
          </BannerDiv>
        </Banner>

        <InfoArticle flexItemDirection='row-reverse'>
          <ArticleDiv>
            <ArticleH2>Amazing Community</ArticleH2>
            <ArticleText lh='2rem'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quia? Alias, beatae aperiam voluptas labore similique
              necessitatibus impedit dignissimos adipisci praesentium officiis
              iste facilis voluptatum nostrum dolor autem obcaecati repellendus,
              dolores odit animi rem? Facilis deserunt suscipit, animi similique
              dolorum culpa! Adipisci minus veritatis ducimus?
            </ArticleText>
          </ArticleDiv>
          <ArticleImage src='/images/community.jpeg' alt='A group of people' />
        </InfoArticle>

        <InfoArticle>
          <ArticleDiv>
            <ArticleH2>Play together</ArticleH2>
            <ArticleText lh='2rem'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quia? Alias, beatae aperiam voluptas labore similique
              necessitatibus impedit dignissimos adipisci praesentium officiis
              iste facilis voluptatum nostrum dolor autem obcaecati repellendus,
              dolores odit animi rem? Facilis deserunt suscipit, animi similique
              dolorum culpa! Adipisci minus veritatis ducimus?
            </ArticleText>
          </ArticleDiv>
          <ArticleImage
            src='/images/play.jpeg'
            alt='Two friends playing playstation together'
          />
        </InfoArticle>
      </main>
    </>
  )
}
