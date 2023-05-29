import { GET_COUNTRIES, REGION_FILTER, SUBREGION_FILTER, APPLY_FILTERS, PAGINATE, ORDER, APPLY_ORDER, RESET_FILTERS } from "./ActionTypes";

const initialState = {
    currentCountries: [],
    allCountries: [],
    filters: {
        region: 'All',
        subregion: 'All'
    },
    order: 'default',
    page: 1
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case GET_COUNTRIES:
            return {
                ...state,
                currentCountries: action.payload,
                allCountries: action.payload
            }

        case PAGINATE:
            let currentPage = state.page;
            if(action.payload === 'first') currentPage = 1;
            if(action.payload === 'previous') currentPage -= 1;
            if(action.payload === 'next') currentPage += 1;
            if(action.payload === 'last') currentPage = Math.ceil(state.currentCountries.length / 10);

            return {
                ...state,
                page: currentPage
            }

        case ORDER:
            return {
                ...state,
                order: action.payload
            }

        case APPLY_ORDER:
            let defaultOrder = state.currentCountries;
            if(state.order === 'nameAZ') defaultOrder = [...defaultOrder.sort((a, b) => a.name.localeCompare(b.name))];
            if(state.order === 'nameZA') defaultOrder = [...defaultOrder.sort((a, b) => b.name.localeCompare(a.name))];
            if(state.order === 'popdown') defaultOrder = [...defaultOrder.sort((a, b) => b.population - a.population)];
            if(state.order === 'popup') defaultOrder = [...defaultOrder.sort((a, b) => a.population - b.population )];
            if(state.order === 'areadown') defaultOrder = [...defaultOrder.sort((a, b) => b.area - a.area)];
            if(state.order === 'areaup') defaultOrder = [...defaultOrder.sort((a, b) => a.area - b.area)];

            return {
                ...state,
                currentCountries: defaultOrder
            }

        case REGION_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    region: action.payload,
                    subregion: 'All'
                }
            }

        case SUBREGION_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    subregion: action.payload
                }
            }

            case APPLY_FILTERS:
                let filteredCountries = state.allCountries;
              
                if (state.filters.region !== 'All') {
                  filteredCountries = filteredCountries.filter(country => country.continent === state.filters.region);
                }
              
                if (state.filters.subregion !== 'All') {
                  filteredCountries = filteredCountries.filter(country => country.subRegion === state.filters.subregion);
                }
              
                return {
                  ...state,
                  currentCountries: filteredCountries, 
                  page: 1
                };
            
            case RESET_FILTERS:
                return {
                    ...state,
                    currentCountries: state.allCountries,
                    page: 1,
                    order: 'default',
                    filters: {
                        region: 'All',
                        subregion: 'All'
                    }
                }

        default:
            return {
                ...state
            }
    }
}

export default reducer;