const router = require('express').Router();
const apiRoutes = require('../routes/api');

router.use('../routes/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;