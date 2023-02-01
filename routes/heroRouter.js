const {Router} = require('express');
const HeroController = require('../controllers/hero.controller');
const heroRouter = Router();

heroRouter.post('/', HeroController.createHero);
heroRouter.get('/', HeroController.getAllHeroes);
heroRouter.put('/:heroId', HeroController.updateHero);
heroRouter.delete('/:heroId', HeroController.deleteHero);

module.exports = heroRouter;