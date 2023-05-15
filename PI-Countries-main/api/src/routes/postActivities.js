const { Router } = require('express');
const postActivities = Router();
const { Country, Activity } = require('../db');

postActivities.post('/activities', async (req, res) => {
    try {
        const { countryID, name, difficulty, duration, season } = req.body;
        if(countryID && name && difficulty && duration && season){
            const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })

        const country = await Country.findByPk(countryID);
        if(country) await newActivity.addCountry(country);
        else throw new Error('Invalid Country')
        
        res.status(200).json(newActivity);

        }
        else throw new Error('Missing data in the body');
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = postActivities;