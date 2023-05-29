import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../Redux/Actions";
import { HomePageContainer, AsideContainer} from "./HomePage-styles";
import Countries from "../Countries/Countries";
import Filters from "../Filters/Filters";


const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <HomePageContainer>
            <AsideContainer>
                <Filters/>
            </AsideContainer>
            <Countries/>
        </HomePageContainer>
    )
}

export default HomePage;

