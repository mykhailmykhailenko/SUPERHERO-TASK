const {Router} = require('express');
const heroRouter = require('./heroRouter');
const superpowerRouter = require('./superpowerRouter')

const rootRouter = Router();
rootRouter.use('/heros', heroRouter);
rootRouter.use('/superpowers', superpowerRouter);


module.exports = rootRouter;