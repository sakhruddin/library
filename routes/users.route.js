const { Router } = require('express');
const { usersController } = require('../controllers/users.controller');
const router = Router();

router.post('/users', usersController.postUser);
router.patch('/users/:id', usersController.loanBook)
router.patch('/admin/users/:id', usersController.returnBookAndBlocked);
router.patch('/users/:id', usersController.returnBook)
module.exports = router;