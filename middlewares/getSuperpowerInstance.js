const {Superpower} = require('../models');
const NotFoundError = require('../errors/NotFoundError');
 
module.exports.getSuperpowerInstance = async (req, res, next) => {
    try {
        const {params: {superpowerId}} = req;
        const superpower = await Superpower.findByPk(superpowerId);
        if(superpower) {
            req.superpowerInstance = superpower;
            next()
        } else {
            throw new NotFoundError ('Superpower not found');
        }
    } catch(error) {
        next(error)
    }
 }