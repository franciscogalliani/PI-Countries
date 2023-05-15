const { Router } = require('express');
const getCountries = require('./getCountries');
const getCountryID = require('./getCountryID');
const postActivities = require('./postActivities');
const getActivities = require('./getActivities');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', getCountries);
router.use('/', getCountryID);
router.use('/', postActivities);
router.use('/', getActivities);

module.exports = router;
