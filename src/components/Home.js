import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return <Container></Container>
}

export default Home

const Container = styled.main`
  display: flex;
  min-height: calc(100vh - 60px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  &:before {
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    bottom: 0;
    z-index: -1;
  }
`
