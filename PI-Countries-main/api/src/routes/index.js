const { Router } = require('express');
const getCountries = require('./getCountries');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', getCountries);

module.exports = router;
