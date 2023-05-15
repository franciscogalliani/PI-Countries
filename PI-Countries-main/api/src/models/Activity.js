const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM(['Summer','Autumn','Winter','Spring'])
        }
    },
    {
        timestamps: false
    })
};