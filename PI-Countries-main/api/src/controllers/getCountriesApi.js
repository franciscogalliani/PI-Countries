const axios = require('axios');

const getCountriesApi = async () => {
    try {
        let response = await axios('https://restcountries.com/v3/all');
        let data = await response.data;
        let countries = data.map(country => {
            return({
                id: country.cca3,
                name: country.name.common,
                image: country.flags[1],
                continent: country.region,
                capital: country.capital ? country.capital[0] : 'Unknown',
                subRegion: country.subregion ? country.subregion : 'Unknown',
                area: country.area,
                population: country.population
            })
        })
        return countries;
    } catch (error) {
        if(error) return('Error fetching the API')
    }
}

module.exports = getCountriesApi;