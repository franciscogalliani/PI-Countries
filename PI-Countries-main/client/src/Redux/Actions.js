import { GET_COUNTRIES, REGION_FILTER, APPLY_FILTERS, SUBREGION_FILTER, PAGINATE, ORDER, APPLY_ORDER, RESET_FILTERS } from './ActionTypes';
import axios from 'axios';

export const getCountries = () => {
    return async (dispatch) => {
        let response = await axios('http://localhost:3001/countries');
        return dispatch({ type: GET_COUNTRIES, payload: response.data })
    }
}

export const applyFilters = () => {
    return { type: APPLY_FILTERS }
}

export const applyOrder = () => {
    return { type: APPLY_ORDER }
}

export const regionFilter = (region) => {
    return { type: REGION_FILTER, payload: region }
}

export const subregionFilter = (subregion) => {
    return { type: SUBREGION_FILTER, payload: subregion }
}

export const paginate = (pag) => {
    return { type: PAGINATE, payload: pag }
}

export const order = (order) => {
    return { type: ORDER, payload: order }
}

export const resetFilters = () => {
    return { type: RESET_FILTERS }
}