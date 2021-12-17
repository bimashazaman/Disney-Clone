import React from 'react'
import styled from 'styled-components'

const Movies = () => {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oL8HzdJT37s55zyqV6m18QHaK8%26pid%3DApi&f=1'
            alt=''
          />
        </Wrap>

        <Wrap>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fusercontent1.hubstatic.com%2F14061960_f1024.jpg&f=1&nofb=1'
            alt=''
          />
        </Wrap>

        <Wrap>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwebneel.com%2Fdaily%2Fsites%2Fdefault%2Ffiles%2Fimages%2Fdaily%2F03-2018%2F3-poster-stolen-princess-animation-movies-2018.jpg&f=1&nofb=1'
            alt=''
          />
        </Wrap>

        <Wrap>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftiffanyyong.com%2Fwp-content%2Fuploads%2F2017%2F03%2FA-Silent-Voice-Anime-Poster.jpg&f=1&nofb=1'
            alt=''
          />
        </Wrap>
        <Wrap>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.9kHZLoPXB2oFIwY29a-SxwHaL2%26pid%3DApi&f=1'
            alt=''
          />
        </Wrap>

        <Wrap>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.F6h1vf-DiHHoYN1-ChJzZAAAAA%26pid%3DApi&f=1'
            alt=''
          />
        </Wrap>
        <Wrap>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.tazUeP9Z1RxANyYamvYNqwHaKk%26pid%3DApi&f=1'
            alt=''
          />
        </Wrap>
        <Wrap>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftiffanyyong.com%2Fwp-content%2Fuploads%2F2017%2F03%2FA-Silent-Voice-Anime-Poster.jpg&f=1&nofb=1'
            alt=''
          />
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 1rem;
  margin-bottom: 1rem;
`

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    object-fit: cover;
  }

  &:hover {
    border: 3px solid rgba(249, 249, 249, 0.5);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transform: scale(1.05);
    transition: cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s;
  }
`
