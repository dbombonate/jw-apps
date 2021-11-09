const express = require('express');
const router = express.Router();

const groupsController = require('./controllers/groupsController');
const publisherTypeController = require('./controllers/publisherTypesController');
const userController = require('./controllers/usersController');

router.get('/', (req, res) => {
  res.send({message: 'API jw-apps working fine!'});
});

router.post('/users/register', userController.register);
router.get('/user/:id?', userController.list);
router.delete('/user/:id', userController.delete);
router.patch('/user/:id', userController.update);

router.get('/groups/:id?', groupsController.list);
router.post('/groups', groupsController.register);
router.delete('/groups/:id', groupsController.remove);
router.patch('/groups/:id', groupsController.update);

router.get('/publisher-types/:id?', publisherTypeController.list);
router.post('/publisher-types', publisherTypeController.register);
router.delete('/publisher-types/:id', publisherTypeController.remove);
router.patch('/publisher-types/:id', publisherTypeController.update);

// Rotas de relatórios (Criar Relatório, Modificar Relatório, Listar Relatórios, Listar por Publicador)

module.exports = router;
