const express = require('express');
const router = express.Router();
 
const railController = require('../controllers/rail.controller');

router.post('/book', railController.apply)

router.get('/getTravellers', railController.getAll)




module.exports = router;