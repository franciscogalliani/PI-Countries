const { Country, Activity, CountryActivities } = require('../db');

const getCountryDB = async (id) => {
    try {
        let country = await Country.findByPk(id)
        let middleTable = await CountryActivities.findAll({
                    where: {
                        countryId: country.id
                    }
                })

                if(middleTable.length){
                    let activities = await Promise.all(middleTable.map(async activity => {
                        let act = await Activity.findByPk(activity.dataValues.activityId);
                        return act.dataValues;
                    }));    
                    return {
                        ...country.toJSON(),
                        activities
                    }
                } else return country;
    } catch (error) {
        
    }
}

module.exports = getCountryDB;