const {Router} = require('express');
const HeroController = require('../controllers/hero.controller');
const {pagination} = require('../middlewares/pagination');
const heroRouter = Router();

heroRouter.post('/', HeroController.createHero);
heroRouter.get('/', pagination, HeroController.getAllHeroes);
heroRouter.get('/:heroId', HeroController.getOneHero);
heroRouter.put('/:heroId', HeroController.updateHero);
heroRouter.delete('/:heroId', HeroController.deleteHero);

module.exports = heroRouter;