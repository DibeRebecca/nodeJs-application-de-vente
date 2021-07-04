const express = require('express');
const auth =require('../middleware/auth');
const multer=require('../middleware/multer-config');
const router = express.Router();
const Thing = require('../models/Thing');
const stuffController = require('../controllers/stuffController');


router.post('/',auth, multer, stuffController.createThing);
router.put('/:id',auth,multer, stuffController.updateThing);
router.delete('/:id',auth, stuffController.deleteThing);
router.get('/:id',auth, stuffController.findOneThing);
router.use('/',auth, stuffController.findThing);

module.exports = router;