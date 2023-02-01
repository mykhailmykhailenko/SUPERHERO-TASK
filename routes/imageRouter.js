const {Router} = require('express');
const ImageController = require('../controllers/image.controller');
const {getHeroInstance} = require('../middlewares/getHeroInstance')
const imageRouter = Router();

imageRouter.post('/:heroId', getHeroInstance, ImageController.createImage);

module.exports = imageRouter;