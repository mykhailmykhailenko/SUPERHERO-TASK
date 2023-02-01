const {Hero} = require('../models/index');

module.exports.createHero = async (req, res, next) => {
    try {
        const {body} = req;
        const result = await Hero.create(body);
        res.status(201).send(result);
    } catch(error) {
        next(error);
    }
};


module.exports.getAllHeroes = async (req, res, next) => {
    try{
        const allHeroes = await Hero.findAll();
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



