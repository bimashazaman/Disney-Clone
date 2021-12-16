import React from 'react'
import styled from 'styled-components'

const Details = () => {
  return (
    <Container>
      <Background>
        <img
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcg3.cgsociety.org%2Fuploads%2Fimages%2Fmedium%2Fgmsphoto96-cartoon-boy-1-1efc5cc0-vwob.jpg&f=1&nofb=1'
          alt=''
        />
      </Background>
      <ImgTitle>
        <img src='' alt='' />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png' alt='' />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' alt='' />
          <span>TRAILER</span>
        </TrailerButton>
        <Addbutton>
          <span>+</span>
        </Addbutton>
        <GroupWatch>
          <img src='/images/group-icon.png' alt='' />
        </GroupWatch>
      </Controls>

      <SubTitle>
        <span>2022 - The Year of the Dragon</span>
      </SubTitle>

      <Description>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, nisi vel consectetur egestas, nisl nisi consectetur
        </span>
      </Description>
    </Container>
  )
}

export default Details

const Container = styled.div`
  min-height: calc(100vh - 70px);
  align-items: center;
  justify-content: center;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  img {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    cursor: pointer;
  }
`

const ImgTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  border: none;

  img {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    cursor: pointer;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 15px;
  opacity: 0.8;
  border: none;
  margin-top: 10px;
  height: 56px;
  cursor: pointer;
  background-color: rgb(249, 249, 249);
  padding: 0px 24px;
  margin-right: 24px;
  img {
  }

  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
    transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s;
    background-color: rgb(198, 198, 198);
    cursor: pointer;
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0.3);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
`

const Addbutton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 15px;
  opacity: 0.5;
  margin-top: 10px;
  height: 44px;
  width: 44px;
  cursor: pointer;
  background-color: rgb(0, 0, 0, 0.6);
  border: 1px solid rgb(255, 255, 255);
  padding: 0px 24px;
  margin-right: 24px;
  img {
  }

  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
    transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s;
    background-color: rgb(198, 198, 198);
    cursor: pointer;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
`

const GroupWatch = styled(Addbutton)`
  background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
  font-size: 10px;
  color: rgb(255, 255, 255);
  margin-top: 20px;

  span {
    font-size: 10px;
    color: rgb(255, 255, 255);
  }
`

const Description = styled.div`
  font-size: 20px;
  color: rgb(255, 255, 255);
  margin-top: 20px;
  span {
    font-size: 20px;
    color: rgb(255, 255, 255);
    letter-spacing: 1px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    color: rgb(255, 255, 255);
    margin-top: 20px;
    span {
      font-size: 10px;
      color: rgb(255, 255, 255);
    }
  }
`
