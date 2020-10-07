import styled from "styled-components"

export const Pack = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: Helvetica, Arial;
  background-image: radial-gradient(
    circle 506px at 50.6% 16.5%,
    rgba(239, 252, 250, 1) 5.5%,
    rgba(154, 192, 206, 1) 100.2%
  );
`

export const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.25s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.18);
  text-shadow: 0 0.15rem 0.2rem rgba(0, 0, 0, 0.2);
  flex-direction: column;
  background-color: blue;
  transform: rotatey(0deg);
  background-image: radial-gradient(
    circle 484px at 49.4% 19%,
    rgba(102, 153, 255, 1) 10%,
    rgba(52, 48, 111, 1) 100.2%
  );
  color: #000000;
`

export const Back = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.25s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.18);
  text-shadow: 0 0.15rem 0.2rem rgba(0, 0, 0, 0.2);
  background-color: yellow;
  transform: rotatey(-180deg);
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 171, 0, 1) 0%,
    rgba(255, 139, 0, 1) 90.1%
  );
`

export const Text = styled.div`
  margin: 1px;
  font-size: 30px;
`

export const CardContainer = styled.div`
  width: 370px;
  height: 200px;
  position: relative;
  perspective: 1000px;
  border-style: outset;
  border-radius: 5%;
  text-align: left;
  &:hover {
    ${Cover} {
      transform: rotatey(180deg);
    }
    ${Back} {
      transform: rotatey(0deg);
    }
  }
`
