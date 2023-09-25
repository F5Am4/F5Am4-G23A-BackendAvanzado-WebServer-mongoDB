const { celebrate, Segments } = require('celebrate');

const { schema }= require('../validators/users.validators.js');

const celebrateValidator = celebrate({
  [Segments.BODY]: schema
})

module.exports= { celebrateValidator };