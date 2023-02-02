const {Router} = require('express');
const HeroController = require('../controllers/hero.controller');
const {pagination} = require('../middlewares/pagination');
const {getHeroInstance} = require('../middlewares/getHeroInstance');
const {getSuperpowerInstance} = require('../middlewares/getSuperpowerInstance');
const multer  = require('multer');
const path = require('path');


const imagePath = path.resolve(__dirname, '../public/images');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, imagePath)
    },
    filename:  function (req, file, cb) {
        cb(null, `${Date.now()}.${file.originalname}`)
      }
})

const upload = multer({storage})

const heroRouter = Router();

heroRouter.post('/', getSuperpowerInstance, HeroController.createHero);
heroRouter.get('/', pagination, HeroController.getAllHeroes);
heroRouter.get('/:heroId', HeroController.getHerosWithSuperpowers);
heroRouter.put('/:heroId', getSuperpowerInstance, HeroController.updateHero);
heroRouter.delete('/:heroId', HeroController.deleteHero);
heroRouter.patch('/:heroId', upload.single('superpowerImage'), HeroController.createHeroImage);

module.exports = heroRouter;