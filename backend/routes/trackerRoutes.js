const express = require('express');
const router = express.Router();
const { addEntry, deleteLatest, getProgressData, deleteAllEntries } = require('../controllers/trackerController');

router.post('/add', addEntry);
router.delete('/delete-latest', deleteLatest);
router.get('/:userId/data', getProgressData); 
router.delete('/delete-all', deleteAllEntries);


module.exports = router;


