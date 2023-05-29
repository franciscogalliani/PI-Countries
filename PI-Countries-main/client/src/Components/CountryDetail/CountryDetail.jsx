import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MainContainer, Content, FirstContainer, SecondContainer, ActivtyButton, ActivityHeader, ReturnButton} from "./CountryDetail-styles";


const CountryDetail =  () => {

    let { idCountry } = useParams();
    let [country, setCountry] = useState({})

    let getCountry = async () => {
        let response = await axios(`http://localhost:3001/countries/${idCountry}`);
        setCountry(response.data)
    }

    useEffect(() => {
        getCountry()
        // eslint-disable-next-line
    }, [])

    return (
        <MainContainer>
            <Content>
                <FirstContainer>
                    <Link to="/countries"><ReturnButton>🢀</ReturnButton></Link>
                    <h1>{`${country.name} (${country.id})`}</h1>
                    <img src={country.image} alt={country.name} width="400px" height="250px"></img>
                </FirstContainer>
                <SecondContainer>
                    <h2>Continent: {country.continent}</h2>
                    <h2>Subregion: {country.subRegion}</h2>
                    <h2>Capital: {country.capital}</h2>
                    <h2>Area: {country.area} km²</h2>
                    <h2>Population: {country.population}</h2>
                    <Link to={`/form/${idCountry}`}><ActivtyButton>Add activity</ActivtyButton></Link>
                </SecondContainer>
                <div/>
            </Content>
            { country.activities && (
                <>
                <ActivityHeader>{`Activities to do in ${country.name}`}</ActivityHeader>  
                {country.activities.map(activity => {
                    return (<Content>
                                <h2>{activity.name}</h2>
                                <h3>{`Difficulty (1 - 5): ${activity.difficulty}`}</h3>
                                <h3>{`Duration (hs): ${activity.duration}`}</h3>
                                <h3>Season: {activity.season}</h3>
                            </Content>)
                })}</>
            )}
        </MainContainer>
    )
}

export default CountryDetail;