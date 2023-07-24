import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import NavBar from './NavBar';
const Header = () => {
  return (
    <MainHeader>
        <NavLink to='/'>
            <img src='./images/gold-kd-letter-logo-design-kd-logo-design-kd-logo-vector-37373384-removebg-preview (1).png' alt='my logo' className='logo'/>
        </NavLink>
        <NavBar/>
    </MainHeader>
  )
}

export default Header

const MainHeader=styled.header`
padding: 0 4.8rem;
height: 7rem;
/* margin-bottom: 20px; */
background-color: ${({theme})=>theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
/* width: 100%; */
/* z-index: 1;
position: fixed; */
.logo{
    height: 8rem;
}
`