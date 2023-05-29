import { styled } from "styled-components";

export const PaginationContainer = styled.div`
    background-color: #7c7c84;
    margin-top: 2rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    color: black;
    
`

export const First = styled.button`
    background-color: black;
    color: white;
    border: none;
    padding: .5rem 1rem;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;
`

export const Previous = styled.button`
    background-color: black;
    color: white;
    border: none;
    padding: .5rem .7rem;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 50%;
    cursor: pointer;
`

export const Next = styled.button`
    background-color: black;
    color: white;
    border: none;
    padding: .5rem .7rem;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 50%;
    cursor: pointer;
`

export const Last = styled.button`
    background-color: black;
    color: white;
    border: none;
    padding: .5rem 1rem;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;
`