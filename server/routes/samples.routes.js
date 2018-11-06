const express = require('express');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname);
    }
})

const upload = multer({ storage: storage });


const sampleController = require('../controllers/sample.controller');

router.get('/', sampleController.getAllSamples);
// router.get('/:id', clientController.getByIdClient);
// router.get('/:id/credit', clientController.getByIdClientCredit);
router.post('/', upload.single('sampleImages'), sampleController.createSample);
// router.put('/:id/client', clientController.updateClient);
// router.delete('/:id', clientController.deleteClient);

module.exports = router;