const express = require ('express')
const router = express.Router()
const controller = require('../controllers/userController')

router.get('/userData', controller.listUsers)

router.post('/store-user', controller.writeUsersRedirect)

module.exports = router




