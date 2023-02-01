const {Image, Hero} = require('../models/index');

module.exports.createImage = async(req, res, next) => {
    try {
        const {body, heroInstance} = req;
        const image = await heroInstance.createImage(body);
        res.status(201).send(image);
    } catch(error) {
        next(error)
    }
}