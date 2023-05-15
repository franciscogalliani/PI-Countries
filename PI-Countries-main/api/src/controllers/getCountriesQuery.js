const { Country } = require('../db');
const { Op } = require('sequelize')

const getCountriesQuery = (name) => {
    return new Promise(resolve => {
        Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        })
        .then((countries) => resolve(countries))
    })
}

module.exports = getCountriesQuery;