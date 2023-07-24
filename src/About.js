import React from 'react'
import styled from 'styled-components'
import HeroSeaction from './Components/HeroSeaction'
const About = () => {
  const heading={
    name:'Ganesh Ecommerce'
  }
  return (
    <Wrapper>
      <HeroSeaction data={heading.name}/>
    </Wrapper>
  )
}

export default About
const Wrapper=styled.section`
height:100vh;

`