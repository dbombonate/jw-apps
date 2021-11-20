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
router.delete('/user/:id', authMiddleware, userController.delete);
router.patch('/user/:id', authMiddleware, userController.update);

router.get('/groups/:id?', groupsController.list);
router.post('/groups', authMiddleware, groupsController.register);
router.delete('/groups/:id', authMiddleware, groupsController.remove);
router.patch('/groups/:id', authMiddleware, groupsController.update);

router.get('/publisher-types/:id?', publisherTypeController.list);
router.post('/publisher-types', authMiddleware, publisherTypeController.register);
router.delete('/publisher-types/:id', authMiddleware, publisherTypeController.remove);
router.patch('/publisher-types/:id', authMiddleware, publisherTypeController.update);

router.post('/publishers/new', (req,res) => {
  return res.send('Novo publicador.')
});
router.get('/publishers', (req,res) => {
  return res.send('Publicadores Lista');
});

// Rotas de relatórios (Criar Relatório, Modificar Relatório, Listar Relatórios, Listar por Publicador)

module.exports = router;
