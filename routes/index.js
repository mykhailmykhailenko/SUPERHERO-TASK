const {Router} = require('express');
const heroRouter = require('./heroRouter');
const imageRouter = require('./imageRouter');
const superpowerRouter = require('./superpowerRouter')

const rootRouter = Router();
rootRouter.use('/heros', heroRouter);
rootRouter.use('/images', imageRouter);
rootRouter.use('/superpowers', superpowerRouter);


module.exports = rootRouter;