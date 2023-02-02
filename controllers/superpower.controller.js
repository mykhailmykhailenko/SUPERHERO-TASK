const {Hero, Superpower} = require('../models/index');

module.exports.createSuperpower = async (req, res, next) => {
    try {
        const {body: {power}} = req;
        const superpower = await Superpower.create({power});
        res.status(201).send(superpower);
    } catch(err) {
        next(err)
    }
}

module.exports.addHerosToSuperpower = async (req, res, next) => {
    try {
        const {params: {superpowerId}, body: {heroId}} = req;
        const superpowerInstance = await Superpower.findByPk(superpowerId);
        const heroInstance = await Hero.findByPk(heroId);
        const [result] = await superpowerInstance.addHero(heroInstance);
        res.status(200).send(result);
    } catch(err) {
        next(err);
    }
}
