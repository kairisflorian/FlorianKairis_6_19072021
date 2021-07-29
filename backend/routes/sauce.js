const express = require('express');
const sauceCtrl = require('../controllers/sauce');
const router = express.Router();



router.get('/', sauceCtrl.getAllSauces);
router.post('/', sauceCtrl.createSauce);
router.get('/:id', sauceCtrl.getOneSauce);
router.put('/:id', sauceCtrl.modifySauce);
router.delete('/:id', sauceCtrl.deleteSauce);



module.exports = router;