import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const SearchBar = styled.input`
    margin-top: 5%;
    height: 7%;
    background-color: #f5f5f5;
    color: #494a4e;
    min-height: 40px;
    border-radius: 4px;
    outline: none;
    border: none;
    line-height: 1.15;
    box-shadow: 0px 10px 20px -18px;
    font-size: 1.5rem;
    padding-left: 1rem;
    

    &:focus {
        border-bottom: 2px solid #000000;
        border-radius: 4px 4px 2px 2px;
    }

    &:hover {
        outline: 1px solid lightgrey;
    }
`
export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    overflow: hidden;
    margin-bottom: 2rem;
    
`

export const CountryItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    &:last-child {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
`

export const CountryItem = styled(Link)`
    box-sizing: border-box;
    width: 100%;
    background-color: #f5f5f5;
    text-decoration: none;
    color: #494a4e;
    font-size: 1.5rem;
    padding-left: 1rem;
    padding-bottom: .5rem;
    border-bottom: solid .1rem lightgrey;

    &:hover {
        background-color: lightgrey;
    }
`