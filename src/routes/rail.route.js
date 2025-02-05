const express = require('express');
const router = express.Router();
 
const railController = require('../controllers/rail.controller');

router.post('/book', railController.apply)
router.put('/updatebookingStatus/:id', railController.update)
router.get('/getBoookingStatus', railController.getBoookingStatus)

router.get('/totalTravellers', railController.getAll)




module.exports = router;