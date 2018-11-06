const express = require('express');
const router = express.Router();


const accountController = require('../controllers/acount.controller');

router.get('/', accountController.getAllAccount);
router.get('/:id', accountController.getByIdAccount);
router.put('/:id', accountController.updateAccount);
router.put('/:id/consign', accountController.updateAccountConsign);
router.put('/:id/retire', accountController.updateAccountRetire);
router.put('/', accountController.updateAccountTransfer);

module.exports = router;