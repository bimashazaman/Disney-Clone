import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
// import firebase from '../firebase'

const Home = () => {
  useEffect(() => {
    // db.collection('movies').onSnapshot(snapshot => {
    //   console.log(snapshot.docs.map(doc => doc.data()))
    // })
  }, [])

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 60px);
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
