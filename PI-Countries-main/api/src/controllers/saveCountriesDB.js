const { Country } = require('../db');

const saveCountriesDB = async (countries) => {
    Country.bulkCreate(countries)
    .then(() => {
        console.log('Database filled');
    })
    .catch((error) => {
        console.error('Error filling the database', error);
    })
}

module.exports = saveCountriesDB;