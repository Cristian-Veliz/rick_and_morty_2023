const express = require('express')
const router = express.Router()
//const { Router } = require('express')
//const router = Router()

const { getCharById } = require('../controllers/getCharByid')
const { login } = require('../controllers/login')
const {postFav, deleteFav} = require('../controllers/handleFavorites')

router.get("/character/:id", getCharById)
router.get("/login", login)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router;
