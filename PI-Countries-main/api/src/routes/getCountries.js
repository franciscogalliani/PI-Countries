const { Router } = require('express');
const getCountries = Router();
const getCountriesApi = require('../controllers/getCountriesApi');
const saveCountriesDB = require('../controllers/saveCountriesDB');
const getCountriesDB = require('../controllers/getCountriesDB');
const db = require('../db');

getCountries.get('/countries', async (req, res) => {
    try {
        let apiCountries = await getCountriesApi();
        await saveCountriesDB(apiCountries);
        let dbCountries = await getCountriesDB();
        res.status(200).json(dbCountries);
    } catch (error) {
        if(error) res.status(400).send(error.message);
    }
})

module.exports = getCountries;
