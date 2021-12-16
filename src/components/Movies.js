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
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oL8HzdJT37s55zyqV6m18QHaK8%26pid%3DApi&f=1'
            alt=''
          />
        </Wrap>
        <Wrap>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oL8HzdJT37s55zyqV6m18QHaK8%26pid%3DApi&f=1'
            alt=''
          />
        </Wrap>
        <Wrap>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oL8HzdJT37s55zyqV6m18QHaK8%26pid%3DApi&f=1'
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
