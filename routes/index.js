const express = require('express');
const homeController = require('../controllers/homeController')
const userController = require('../controllers/userController')
const postController = require('../controllers/postController')

const router = express.Router();
router.get('/', homeController.index);
router.get('/user/login', userController.login);
router.get('/post/add', postController.add);
router.post('/post/add', postController.addAction);

module.exports = router;