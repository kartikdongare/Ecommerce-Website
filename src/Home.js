import React from 'react'
import styled from 'styled-components'
import HeroSeaction from './Components/HeroSeaction';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
// import { useProductContext } from './Context/ProductContext';
import FeaturedProduct from './Components/FeaturedProduct';
// import Header from './Components/Header'
const Home = () => {
  const heading = {
    name: 'Ganesh Store'
  }
  console.log(heading.name);
  return (
    <Wrapper>
      
      <HeroSeaction data={heading.name} />
      <FeaturedProduct/>
      <Services />
      <Trusted />
      
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.div`
/* height:100vh; */
/* background-color: ${({ theme }) => theme.colors.bg}; */
`
