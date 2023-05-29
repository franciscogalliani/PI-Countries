import React from "react";
import { FiltersContainer, FiltersMain, SearchBarContainer, BorderLine, RegionsContainer, RegionContainer, ResetButton, FilterSelect, Label } from "./Filters-styles";
import { LandingHeading } from "../LandingPage/landingPage-styles";
import LandingSearchBar from "../LandingSearchBar/LandingSearchBar";
import { useDispatch } from "react-redux";
import { regionFilter, subregionFilter, applyFilters, order, applyOrder, resetFilters } from "../../Redux/Actions";
import { useState } from "react";
import { Link } from "react-router-dom";

const Filters = () => {

    const dispatch = useDispatch();
    const [region, setRegion] = useState("All")

    const regionHandler = (e) => {
        let value = e.target.value;
        setRegion(value);
        dispatch(regionFilter(value));
        dispatch(applyFilters());
    }

    const subregionHandler = (e) => {
        let value = e.target.value;
        dispatch(subregionFilter(value));
        dispatch(applyFilters());
    }

    const orderHandler = (e) => {
        let value = e.target.value;
        dispatch(order(value));
        dispatch(applyOrder());
    }

    return (
        <FiltersContainer>
            <Link to="/"><LandingHeading>PI COUNTRIES</LandingHeading></Link>
            <FiltersMain>
                <SearchBarContainer>
                    <LandingSearchBar/>
                    <BorderLine/>
                </SearchBarContainer>
                <RegionsContainer>
                    <RegionContainer>
                        <Label>Region </Label>
                        <FilterSelect onChange={regionHandler}>
                            <option value="All">All</option><option value="Americas">Americas</option>
                            <option value="Africa">Africa</option><option value="Europe">Europe</option>
                            <option value="Asia">Asia</option><option value="Oceania">Oceania</option>
                            <option value="Antarctic">Antarctic</option>
                        </FilterSelect>
                    </RegionContainer>
                    <RegionContainer>
                        <Label>Subregion </Label>
                        <FilterSelect onChange={subregionHandler} disabled={region === 'All' || region === 'Antarctic'} >
                            <option value="All">All</option>
                            {region === 'Americas' && (
                            <><option value="Caribbean">Caribbean</option><option value="Central America">Central America</option>
                            <option value="South America">South America</option><option value="North America">North America</option></>)}
                            {region === 'Africa' &&(
                            <><option value="Middle Africa">Middle Africa</option><option value="Eastern Africa">Eastern Africa</option>
                            <option value="Northern Africa">Northern Africa</option><option value="Southern Africa">Southern Africa</option>
                            <option value="Western Africa">Western Africa</option></>
                            )}
                            {region === 'Europe' && (
                            <><option value="Northern Europe">Northern Europe</option><option value="Southern Europe">Southern Europe</option>
                            <option value="Western Europe">Western Europe</option><option value="Eastern Europe">Eastern Europe</option></>
                            )}
                            {region === 'Asia' && (
                            <><option value="Western Asia">Western Asia</option><option value="Southern Asia">Southern Asia</option>
                            <option value="South-Eastern Asia">South-Eastern Asia</option><option value="Eastern Asia">Eastern Asia</option></>
                            )}
                            {region === 'Oceania' && (
                            <><option value="Melanesia">Melanesia</option><option value="Polynesia">Polynesia</option>
                            <option value="Micronesia">Micronesia</option><option value="Australia and New Zealand">Australia and New Zealand</option></>
                            )}
                        </FilterSelect>
                    </RegionContainer>
                    <RegionContainer>
                    <Label>Order by </Label>
                    <FilterSelect onChange={orderHandler}>
                        <option>-</option>
                        <option value="nameAZ">Name (A-Z)</option><option value="nameZA">Name (Z-A)</option>
                        <option value="popdown">Population (Downward ▼)</option><option value="popup">Population (Upward ▲)</option>
                        <option value="areadown">Area (Downward ▼)</option><option value="areaup">Area (Upward ▲)</option>
                    </FilterSelect>
                    </RegionContainer>
                <ResetButton onClick={() => dispatch(resetFilters())}>Reset filters</ResetButton>
                </RegionsContainer>
            </FiltersMain>
        </FiltersContainer>
    )
}

export default Filters;