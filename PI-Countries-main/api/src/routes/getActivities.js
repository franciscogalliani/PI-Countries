const { Router } = require('express');
const getActivities = Router();
const getActivitiesDB = require('../controllers/getActivitiesDB');

getActivities.get('/activities', async (req, res) => {
    try {
        let activities = await getActivitiesDB();
        if(activities) res.status(200).json(activities);
        else throw new Error('There is no activities yet');
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = getActivities;