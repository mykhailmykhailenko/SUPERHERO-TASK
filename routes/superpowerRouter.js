const {Router} = require('express');
const SuperpowerController = require('../controllers/superpower.controller');
const superpowerRouter = Router();

superpowerRouter.post('/', SuperpowerController.createSuperpower);
superpowerRouter.post('/:superpowerId', SuperpowerController.addHerosToSuperpower);

module.exports = superpowerRouter;
