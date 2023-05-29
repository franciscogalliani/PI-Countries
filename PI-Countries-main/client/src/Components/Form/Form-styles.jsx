import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const FormContainer = styled.form`
    background-color: #afb0b5;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-inline: 6rem;
    border-radius: 1rem;
    height: 40rem;
    align-items: center;
    font-family: 'Oswald', sans-serif;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
`

export const Input = styled.input`
    width: 100%;
    height: 1.3rem;
    padding: .5rem;
    border-radius: .4rem;
`

export const Select = styled.select`
    height: 2.6rem;
    width: 13rem;
    padding: .5rem;
    border-radius: .4rem;
`

export const Label = styled.label`
    font-size: 1.3rem;
    font-family: 'Oswald', sans-serif;
`

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 2rem;
`
export const ButtonsForm = styled.button`
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