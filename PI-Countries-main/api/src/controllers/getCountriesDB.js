const { Country } = require('../db');

const getCountriesDB = async () => {
    try {
        const countries = await Country.findAll();
        return countries;
    } catch (error) {
        return new Error('Error with get request')
    }
}

module.exports = getCountriesDB;

