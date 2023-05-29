import styled from "styled-components";

export const FiltersContainer = styled.div`
    position: fixed;
    display: flex;
    width: 25%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
    gap: 4rem;
    min-width: 351px;
`

export const FiltersMain = styled.div`
    background-color: #afb0b5;
    width: 85%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
`

export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 40%;
`

export const BorderLine = styled.div`
    background-color: #7c7c84;
    width: 70%;
    height: .1rem;
`

export const RegionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 20%;
    gap: 2rem;
    width: 100%;
    padding-left: 4rem;
`

export const RegionContainer = styled.div`
    padding-top: 3rem;
    display: flex;
    gap: 2rem;
    width: 20rem;
    font-size: 1.5rem;
`

export const ResetButton = styled.button`
    margin-left: 7rem;
    background-color: black;
    color: white;
    border: none;
    padding: .5rem .7rem;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 2rem;
    cursor: pointer;
`

export const FilterSelect = styled.select`
    border:1px solid #d9d9d9;
    outline: none;
`

export const Label = styled.label`
    background-color: #696a6e;
    color: white;
    padding: .2rem .4rem;
    border-radius: .5rem;
`