import styled, { keyframes } from "styled-components"

export const SpotlightContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  margin-top: 10px;
`

const rotate = keyframes`
  0% {
    -webkit-clip-path: ellipse(100px 100px at 0% 50%);
    clip-path: ellipse(100px 100px at 0% 50%);
  }

  50% {
    -webkit-clip-path: ellipse(100px 100px at 100% 50%);
    clip-path: ellipse(100px 100px at 100% 50%);
  }

  100% {
    -webkit-clip-path: ellipse(100px 100px at 0% 50%);
    clip-path: ellipse(100px 100px at 0% 50%);
  }
`

export const SpotH1 = styled.div`
  color: #333;
  font-family: Helvetica;
  margin: 0;
  padding: 0;
  font-size: 8rem;
  letter-spacing: -0.3rem;
  position: relative;
  -webkit-text-stroke: 0.6px black;
  /*   background-image: url(https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80); */
  background-size: 150%;
  background-position: center center;
  color: transparent;

  &:after {
    content: attr(data-spotlight);
    color: yellow;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-clip-path: ellipse(100px 100px at 0% 50%);
    clip-path: ellipse(100px 100px at 0% 50%);
    animation: ${rotate} 5s infinite;

    -webkit-background-clip: text;
    background-clip: text;
  }

  @media screen and (min-width: 100px) and (max-width: 500px) {
    color: #ffcccc;
    font-size: 5rem;
    letter-spacing: 2px;
  }
`

export const KeyformSpotlight = styled.div``
