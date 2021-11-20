const express = require('express');
const router = express.Router();

const groupsController = require('./controllers/groupsController');
const publisherTypeController = require('./controllers/publisherTypesController');
const userController = require('./controllers/usersController');
const authController = require('./controllers/authController');
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

router.post('/publishers/new', (req,res) => {
  return res.send('Novo publicador.')
});
router.get('/publishers', (req,res) => {
  return res.send('Publicadores Lista');
});

// Rotas de relatórios (Criar Relatório, Modificar Relatório, Listar Relatórios, Listar por Publicador)

module.exports = router;
