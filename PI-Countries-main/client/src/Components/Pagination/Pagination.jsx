import React from "react";
import { PaginationContainer, First, Previous, Next, Last } from "./Pagination-styles";
import { useDispatch, useSelector } from "react-redux";
import { paginate } from "../../Redux/Actions";

const Pagination = () => {

    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    const countries = useSelector(state => state.currentCountries);
    let maxPage = Math.ceil(countries.length / 10)

    return (
        <PaginationContainer>
            { page > 1 && <First onClick={() => dispatch(paginate("first"))}>First</First> }
            { page > 1 && <Previous onClick={() => dispatch(paginate("previous"))}>🢀</Previous> }
            <h2>{page}</h2>
            { page < maxPage && <Next onClick={() => dispatch(paginate("next"))}>🢂</Next> }
            { page < maxPage && <Last onClick={() => dispatch(paginate("last"))}>Last</Last> }
        </PaginationContainer>
    )
}

export default Pagination