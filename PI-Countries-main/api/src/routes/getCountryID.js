const { Router } = require('express');
const getCountryID = Router();
const getCountryDB = require('../controllers/getCountryDB');

getCountryID.get('/countries/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let country = await getCountryDB(id);
       if(country) res.status(200).json(country);
       else throw new Error;
    } catch (error) {
        res.status(404).send('Invalid country ID')
    }
})

module.exports = getCountryID;