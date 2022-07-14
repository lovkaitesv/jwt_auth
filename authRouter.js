const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')

router.post('/registration', [
  check('username', 'User sholud have a name').notEmpty(),
  check('password', 'password should be longer than 4 characters and less than 10').isLength({min: 4, max: 10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers)

module.exports = router