const express = require('express');
const router = express.Router();

const groupsController = require('./controllers/groupsController');
const publisherTypeController = require('./controllers/publisherTypesController');
const userController = require('./controllers/usersController');
const authController = require('./controllers/authController');
const publisherController = require('./controllers/publishersController');
const familyController = require('./controllers/familyController');

const authMiddleware = require('./middlewares/auth');
const isAdminMiddleware = require('./middlewares/isAdmin');

router.get('/', (req, res) => {
  res.send({message: 'API jw-apps working fine!'});
});

router.post('/users/register', authController.register);
router.post('/users/login', authController.login);

router.get('/user/:id?', authMiddleware, isAdminMiddleware, userController.list);
router.delete('/user/:id', authMiddleware, isAdminMiddleware, userController.delete);
router.patch('/user/:id', authMiddleware, isAdminMiddleware, userController.update);

router.get('/groups/:id?', groupsController.list);
router.post('/groups', authMiddleware, isAdminMiddleware, groupsController.register);
router.delete('/groups/:id', authMiddleware, isAdminMiddleware, groupsController.remove);
router.patch('/groups/:id', authMiddleware, isAdminMiddleware, groupsController.update);

router.get('/publisher-types/:id?', publisherTypeController.list);
router.post('/publisher-types', authMiddleware, isAdminMiddleware, publisherTypeController.register);
router.delete('/publisher-types/:id', authMiddleware, isAdminMiddleware, publisherTypeController.remove);
router.patch('/publisher-types/:id', authMiddleware, isAdminMiddleware, publisherTypeController.update);

router.post('/publishers/new', authMiddleware, isAdminMiddleware, publisherController.create);
router.get('/publishers', authMiddleware, isAdminMiddleware, publisherController.list);
router.get('/publishers/:id', authMiddleware, publisherController.listById);
router.delete('/publishers/:id', authMiddleware, isAdminMiddleware, publisherController.delete);
router.patch('/publishers/:id', authMiddleware, isAdminMiddleware, publisherController.update);

router.post('/family/new', authMiddleware, isAdminMiddleware, familyController.create);
router.get('/family', authMiddleware, isAdminMiddleware, familyController.list);
router.get('/family/:id', authMiddleware, isAdminMiddleware, familyController.listById);
router.delete('/family/:id', authMiddleware, isAdminMiddleware, familyController.delete);
router.patch('/family/:id', authMiddleware, isAdminMiddleware, familyController.update);

module.exports = router;
