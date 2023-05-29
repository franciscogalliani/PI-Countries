import React from "react";
import { useSelector } from "react-redux";
import { CountriesContainer, CardsContainer } from "./Countries-styles";
import Country from "../Country/Country";
import Pagination from "../Pagination/Pagination";

const Countries = () => {
    const countries = useSelector(state => state.currentCountries);
    const page = useSelector(state => state.page)

    const printCards = () => {
        let end = page * 10;
        let start = end - 10;
        let cards = countries.slice(start, end);
        return cards;
    }

    return (
        <CountriesContainer>
            <h2>List of Countries</h2>
            <p>Click on any flag to see details</p>
            <CardsContainer>
                {printCards().map(country => {
                    return <Country
                            key={country.id}
                            id={country.id}
                            name={country.name}
                            image={country.image}
                            continent={country.continent}
                            />
                })}
            </CardsContainer>
            <Pagination/>
        </CountriesContainer>
    )
}

export default Countries;