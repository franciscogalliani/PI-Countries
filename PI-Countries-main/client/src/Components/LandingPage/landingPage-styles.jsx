import styled from "styled-components";
import background from "./landing.jpg";

export const LandingContainer = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
    overflow: hidden;
`

export const MainContainer = styled.div`
    background: rgba(8, 6, 6, 0.29);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    width: 55%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LandingHeading = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-size: 2.5rem;
    color: #000000;
    margin: 0;
    background: rgba(255, 255, 255, 0.664);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    padding: 1rem 2rem;
    border-radius: 1.5rem;
`

export const LandingButton = styled.button`
    font-family: 'Oswald', sans-serif;
    margin-bottom: 2rem;
    border-radius: 1rem;
    padding: 1em 2em;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #000000;
    transition: all 1000ms;
    font-size: 1.3rem;
    position: relative;
    overflow: hidden;
    outline: 2px solid #000000;

    &:hover {
        color: #ffffff;
        transform: scale(1.1);
        outline: 2px solid #ffffff;
        box-shadow: 4px 5px 17px -4px #ffffff;
        cursor: pointer;
  }

    &::before {
        content: "";
        position: absolute;
        left: -50px;
        top: 0;
        width: 0;
        height: 100%;
        background-color: #000000;
        transform: skewX(45deg);
        z-index: -1;
        transition: width 1000ms;
  }

    &:hover::before {
        width: 250%;
  }
`


