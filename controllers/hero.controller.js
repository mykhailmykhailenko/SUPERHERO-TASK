const {Hero} = require('../models/index');
const NotFoundError = require('../errors/NotFoundError');


module.exports.createHero = async (req, res, next) => {
    try {
        const {body} = req;
        const result = await Hero.create(body);
        res.status(201).send(result);
    } catch(error) {
        next(error);
    }
};

module.exports.getOneHero = async (req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const hero = await Hero.findByPk(heroId);
        if (!hero){
            throw new NotFoundError('Hero not found');
        }
        res.status(200).send(hero);
    } catch(error) {
        next(error);
    }
}

module.exports.getAllHeroes = async (req, res, next) => {
    try{
        const {pagination} = req;
        const allHeroes = await Hero.findAll({
           ...pagination
        });
        res.status(200).send(allHeroes);
    } catch(error) {
        next(error);
    }
};

module.exports.updateHero = async (req, res, next) => {
    try {
        const {body, params: {heroId}} = req;
        const [rowCount, [updated]] = await Hero.update(body, {
            where: {
                id: heroId
            },
            returning: true
        });
        res.status(200).send(updated);
    } catch(error) {
        next(error);
    }
};

module.exports.deleteHero = async (req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const deletedHero = await Hero.destroy({
            where: {
                id: heroId
            }
        });
        if (deletedHero) {
            res.status(200).send({data: deletedHero})
        } else {
            res.status(404)
        }
    }catch(error) {
        next(error);
    }
};



