const router = require('express').Router();
const tripController = require('../controllers/trip.controller');

// C(R)UD
router.get('/', tripController.list);

router.get('/:id', tripController.detail);

// (C)RUD
router.post('/', tripController.create);

// CR(U)D
router.put('/:id', tripController.update);

// CRU(D)
router.delete('/:id', tripController.delete);

module.exports = router;