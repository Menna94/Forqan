const express = require('express'),
router = express.Router();

const {
    getDoners,
    getSingleDoner,
    addDoner,
    updateDoner,
    deleteDoner
} = require('../Controllers/doner.controller');

//Fetch All Doners
//GET /api/v1/doners
router.get('/', getDoners);

//Fetch Single Doner
//GET /api/v1/doner/:id
router.get('/:id',getSingleDoner );

//Create A Doner
//POST /api/v1/doners
router.post('/', addDoner);

//Update A Doner
//PUT /api/v1/doner/:id
router.put('/:id', updateDoner );

//Delete A Doner
//DELETE /api/v1/doner/:id
router.delete('/:id', deleteDoner)

module.exports = router;