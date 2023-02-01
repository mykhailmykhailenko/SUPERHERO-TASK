const {Hero} = require('../models');
 
module.exports.getHeroInstance = async (req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const hero = await Hero.findByPk(heroId);
        if(hero) {
            req.heroInstance = hero;
            next()
        } else {
            res.status(404).send({error: 'No such hero'});
        }
    } catch(error) {
        next(error)
    }
 }
