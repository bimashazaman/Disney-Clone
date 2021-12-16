import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

export default function ImgSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='/images/slider-badag.jpg' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-badging.jpg' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-scale.jpg' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-scales.jpg' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-badag.jpg' alt='' />
      </Wrap>
    </Carousel>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
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

const Carousel = styled(Slider)`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 10px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: #fff;
  }

  button {
    z-index: 1;
  }

  .slack-list {
    overflow: visible;
  }
`
