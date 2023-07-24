import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {FiShoppingCart} from 'react-icons/fi'
import { CgMenu,CgClose } from "react-icons/cg";
import {useCartContext} from '../Context/Cart_Context'
const NavBar = () => {
  const [menuicon,setMenuicon]=useState();
  const {total_item}=useCartContext()
  return (
    <Nav>
      <div className={menuicon?' active':'navbar'}>
        <div >
          <ul className='navbar-list'>
            <li>
              <NavLink to='/' className='navbar-link ' onClick={()=>setMenuicon(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className='navbar-link ' onClick={()=>setMenuicon(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to='/products' className='navbar-link ' onClick={()=>setMenuicon(false)}>Products</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className='navbar-link ' onClick={()=>setMenuicon(false)}>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/cart' className='navbar-link cart-trolley--link'>
                <FiShoppingCart className='cart-trolley'/>
                <span className='cart-total--item'>{total_item}</span>
              </NavLink>
            </li>
          </ul>

          {/* two button for open and close of menu */}
          <div className='mobile-navbar-btn'>
            <CgMenu name='menu-outline' className='mobile-nav-icon' onClick={()=>setMenuicon(true)}/>
            <CgClose name='close-outline' className='mobile-nav-icon close-outline' onClick={()=>setMenuicon(false)}/>
          </div>
        </div>
      </div>
    </Nav>
  )
}

export default NavBar;

const Nav=styled.nav`
.navbar-list{
  display: flex;
  gap: 4.8rem;
  align-items: center;


.navbar-link{
  /* color: #000; */
  &:link,
  &:visited{
    display: inline-block;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    color: black;
    transition: color 0.3s linear;
  }

  &:hover,
  &:active{
    color: ${({theme})=>theme.colors.helper};
  }
}
}

.mobile-navbar-btn{
  display: none;
  background-color: transparent;
  cursor: pointer;
  border: none;
}

.mobile-nav-icon[name='close-outline']{
  display: none;
}
.close-outline{
  display: none;
}
.cart-trolley--link{
  position: relative;
  
  .cart-trolley{
    position: relative;
    font-size: 3.2rem;
  }

  .cart-total--item{
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    color: #000;
    border-radius: 50%;
    display: grid;
    place-items: center;
    top: -20%;
    left: 70%;
    background-color: ${({theme})=>theme.colors.helper};
  }
}

.user-login--name{
  text-transform: capitalize;
}

.user-logout,
.user-login{
  font-size: 1.4rem;
  padding: 0.8rem 1.4rem;
}

@media (max-width:${({theme})=>theme.media.mobile}) {
  .mobile-navbar-btn{
    display: inline-block;
    z-index: 9999;
    border: ${({theme})=>theme.colors.black};

    .mobile-nav-icon{
      font-size: 4.2rem;
      /* color: white; */
    }
  }

  .active .mobile-nav-icon{
    display: none;
    font-size: 4.2rem;
    position: absolute;
    top: 30%;
    right: 10%;
    color: ${({theme})=>theme.colors.black};
    z-index: 9999;
  }

  .active .close-outline{
    display: inline-block;
  }

  .navbar-list{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    visibility: hidden;
    opacity: 0;
    transform: translateX(100%);
    transition: all 3s linear;
  }

  .active .navbar-list{
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
    z-index: 999;
    transform-origin: right;
    transition: all 3s linear;

    .navbar-link{
      font-size: 4.2rem;
      /* color: black; */
    } 
  }
  
  .cart-trolley--link{
    position: relative;

    .cart-trolley{
      position: relative;
      font-size: 5.2rem;
    }

    .cart-total--item{
      width: 4.2rem;
      height: 4.2rem;
      font-size: 2rem;
    }
  }

  .user-logout,
  .user-login{
    font-size: 2.2rem;
    padding: 0.8rem 1.4rem;
  }
}
`;
