import React from 'react'
import styled from 'styled-components'

const header = () => {
  return (
    <Nav>
      <Logo src='/images/logo.svg'></Logo>
      <NavMenu>
        <a href=''>
          <img src='/images/home-icon.svg' alt='' />
          <span>HOME</span>
        </a>
        <a href=''>
          <img src='/images/search-icon.svg' alt='' />
          <span>Search</span>
        </a>
        <a href=''>
          <img src='/images/watchlist-icon.svg' alt='' />
          <span>Watchlist</span>
        </a>
        <a href=''>
          <img src='/images/original-icon.svg' alt='' />
          <span>original</span>
        </a>
        <a href=''>
          <img src='/images/movie-icon.svg' alt='' />
          <span>Movies</span>
        </a>
        <a href=''>
          <img src='/images/series-icon.svg' alt='' />
          <span>series</span>
        </a>
      </NavMenu>

      <UserImage src='/images/bimasha.jpg'></UserImage>
    </Nav>
  )
}

export default header

const Nav = styled.nav`
  height: 60px;
  background-color: #090b13;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 36px;
`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-left: 20px;
  /* flex-wrap: wrap; */
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 25px;
      margin-right: 5px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        background-color: white;
        opacity: 0;
        transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        transform: scaleX(0);
        transform-origin: left center;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImage = styled.img`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  justify-self: self-end;
  cursor: pointer;
`
