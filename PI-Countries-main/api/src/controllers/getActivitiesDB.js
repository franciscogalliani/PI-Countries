const { Activity } = require('../db');

const getActivitiesDB = async () => {
    try {
        return await Activity.findAll();
    } catch (error) {
        return error;
    }
}

module.exports = getActivitiesDB;