const router = require('express').Router();
const taskController = require('../controllers/task.controller');

// C(R)UD
router.get('/', taskController.list);

router.get('/:id', taskController.detail);

// (C)RUD
router.post('/', taskController.create);

// CR(U)D
router.put('/:id', taskController.update);

// CRU(D)
router.delete('/:id', taskController.delete);

module.exports = router;