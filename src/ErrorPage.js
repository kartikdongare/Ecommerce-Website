import React from 'react'
import styled from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div>
          <h2>404</h2>
          <h2>UH OH! You're lost.</h2>
          <p>
            The page you are looking for does not exit. How you got here is a mystery. But you can click the button below to go the homepage.
          </p>
          <Button><NavLink to='/'>Back to Home Page</NavLink> </Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default ErrorPage;

const Wrapper=styled.section`
.container{
  padding: 9rem 0;
  text-align: center;

/* h2{
  font-size: 10rem;
}
h3{
  font-size: 5.2rem;
} */
p{
  margin: 2rem 0;
}
}
`;
