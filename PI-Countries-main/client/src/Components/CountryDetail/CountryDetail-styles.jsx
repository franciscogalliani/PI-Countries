import { styled } from "styled-components";


export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    transform: translateY(125px)
`

export const Content = styled.div`
    width: 50%;
    background-color: #afb0b5;
    padding: 4rem 4rem;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Oswald', sans-serif;
`

export const FirstContainer = styled.div`
    text-align: center;
    font-size: 1.5rem;
`

export const SecondContainer = styled.div` 
    font-size: 1.2rem;
`

export const ActivtyButton = styled.button`
    background-color: black;
    color: white;
    border: none;
    padding: .6rem 2rem;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    margin-left: 5rem;
`

export const ActivityHeader = styled.h2`
    font-size: 2.5rem;
    color: #afb0b5;
    font-family: 'Oswald', sans-serif;
    margin: 0;
`

export const ReturnButton = styled.button`
    background-color: black;
    color: white;
    border: none;
    padding: .5rem .7rem;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 23rem;
`