import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../Redux/Actions";
import { SearchBar, CountryItem, CountryItemContainer, SearchBarContainer } from "./LandingSearchBar-styles";

const LandingSearchBar = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    const countries = useSelector(state => state.allCountries);
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        setShowDropdown(value.length > 0);
    }

    const filterDropdownContent = () => {
        return countries.filter(country => {
            return country.name.substring(0,searchTerm.length).toLowerCase() === searchTerm.toLowerCase()
        })
    }

    return (
        <SearchBarContainer>
            <SearchBar
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search country..."
            />
            {showDropdown && (
                <CountryItemContainer>
                    {filterDropdownContent().map(option => (
                        <CountryItem to={`/countries/${option.id}`}><span key={option.name} >{option.name}</span></CountryItem>
                    ))}
                </CountryItemContainer>
            )}
        </SearchBarContainer>
    )

}

export default LandingSearchBar;
