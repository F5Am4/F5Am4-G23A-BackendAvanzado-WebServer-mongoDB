const { Router } = require('express');
const { userGet, userPost, userPut, userDel } = require('../controllers/users.controller.js');
const { celebrateValidator } = require('../middlewares/celebrateValidator.js');

const router = Router()

//CRUD 
router.post("/",celebrateValidator, userPost );//C
router.get("/", userGet );//R
router.put("/:id", userPut ); //U
router.delete("/:id", userDel );//D


module.exports = router