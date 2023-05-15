const { Router } = require('express');
const getCountries = Router();
const { Country } = require('../db');
const getCountriesApi = require('../controllers/getCountriesApi');
const saveCountriesDB = require('../controllers/saveCountriesDB');
const getCountriesDB = require('../controllers/getCountriesDB');
const getCountriesQuery = require('../controllers/getCountriesQuery');

getCountries.get('/countries', async (req, res) => {
    const { name } = req.query;
    if(name){
        try {
            let queryCountries = await getCountriesQuery(name);
            if(queryCountries) res.status(200).json(queryCountries);
            else throw new Error('No country found with that query')
        } catch (error) {
            res.status(404).send(error.message)
        }
    } else {
        try {
            let apiCountries = await getCountriesApi();
            if(await Country.count() === 0) await saveCountriesDB(apiCountries);
            let dbCountries = await getCountriesDB();
            res.status(200).json(dbCountries);
        } catch (error) {
            if(error) res.status(400).send(error.message);
        }
    }
})

module.exports = getCountries;
