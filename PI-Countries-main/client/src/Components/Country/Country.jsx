import React from "react";
import { Link } from "react-router-dom";
import { CountryCard, CountryFlag } from "./Country-styles";

const Country = (props) => {
    const { id, name, image, continent } = props;

    return (
        <CountryCard>
            <Link to={`/countries/${id}`}><CountryFlag src={image} alt={name} width="250px" height="150px" /></Link>
            <div>
                <h2>{name}</h2>
                <h3>{continent}</h3>
            </div>
        </CountryCard>
    )
}

export default Country;