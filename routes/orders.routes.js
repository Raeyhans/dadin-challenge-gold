const router = require('express').Router();
const orderController = require('../controllers/order.controller');

router.post('/', orderController.addOrder);
router.get('/', orderController.getAllOrder);
router.get('/:id', orderController.getOrderByID);
router.put('/:id', orderController.updateItem);

module.exports = router;