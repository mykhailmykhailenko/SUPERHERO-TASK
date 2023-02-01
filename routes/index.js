const {Router} = require('express');
const heroRouter = require('./heroRouter');
const imageRouter = require('./imageRouter');

const rootRouter = Router();
rootRouter.use('/heros', heroRouter);
rootRouter.use('/images', imageRouter);


module.exports = rootRouter;