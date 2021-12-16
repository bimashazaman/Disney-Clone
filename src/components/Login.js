import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogo1 src='/images/cta-logo-one.svg' />
        <SignUp>Get All There</SignUp>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, nisi vel consectetur egestas, nisl nisi consectetur
        </Description>

        <CTALogo2 src='/images/cta-logo-two.png' />
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  background-size: cover;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url('/images/login-background.jpg') center center / cover
      no-repeat fixed;
    content: '';
    z-index: -1;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px;
  }

  @media (max-width: 320px) {
    padding: 40px 20px;
  }
`

const CTALogo1 = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  cursor: pointer;
`

const SignUp = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #0063e5;
  color: #f9f9f9;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 17px 0;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  opacity: 0.8;
  border: 1px solid #0063e5;

  &:hover {
    background: #0063e5;
    color: black;
    opacity: 1;
    transform: scale(1.1);
    transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s;
    background-color: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

const Description = styled.p`
  font-size: 11px;
  color: rgb(255, 255, 255);
  margin-top: 20px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`

const CTALogo2 = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  cursor: pointer;
  margin-top: 20px;
`
