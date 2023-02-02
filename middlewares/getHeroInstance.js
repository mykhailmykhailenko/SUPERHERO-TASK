const {Hero} = require('../models');
const NotFoundError = require('../errors/NotFoundError');
 
module.exports.getHeroInstance = async (req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const hero = await Hero.findByPk(heroId);
        if(hero) {
            req.heroInstance = hero;
            next()
        } else {
            throw new NotFoundError ('Hero not found');
        }
    } catch(error) {
        next(error)
    }
 }
