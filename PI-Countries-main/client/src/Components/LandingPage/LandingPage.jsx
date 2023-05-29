import React from "react";
import { Link } from 'react-router-dom';
import LandingSearchBar from "../LandingSearchBar/LandingSearchBar";
import { LandingContainer, MainContainer, LandingHeading, LandingButton } from "./landingPage-styles";


const LandingPage = () => {

    return (
        <LandingContainer>
            <LandingHeading>HENRY COUNTRIES</LandingHeading>
            <MainContainer>
                <LandingSearchBar/>
            </MainContainer>
            <Link to='/countries'><LandingButton>Explore Countries</LandingButton></Link>
        </LandingContainer>
    )
}

export default LandingPage;