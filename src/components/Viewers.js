import React from 'react'
import styled from 'styled-components'

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/viewers-marvel.png' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/viewers-national.png' alt='' />
      </Wrap>{' '}
      <Wrap>
        <img src='/images/viewers-pixar.png' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/viewers-starwars.png' alt='' />
      </Wrap>
    </Container>
  )
}

export default Viewers

export const Container = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 20px;
  justify-items: center;
`

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
    border-color: rgba(0, 0, 0, 0.09);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`
