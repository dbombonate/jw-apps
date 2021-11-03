const express = require('express');
const router = express.Router();

const groupsController = require('./controllers/groupsController');
const publisherTypeController = require('./controllers/publisherTypesController');

router.get('/', (req, res) => {
  res.send({message: 'API jw-apps working fine!'});
});

//router.get('/publisher-type', publisherTypeController);
router.get('/groups', groupsController.list);
router.get('/publisher-types', publisherTypeController.list);

router.post('/groups', groupsController.register);
router.post('/publisher-types', publisherTypeController.register);

// Rotas de relatórios (Criar Relatório, Modificar Relatório, Listar Relatórios, Listar por Publicador)

module.exports = router;