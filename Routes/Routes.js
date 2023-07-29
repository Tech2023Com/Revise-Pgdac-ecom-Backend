const express  = require('express');
const router   = express.Router()
const Conrollers =  require('../Controllers/Controllers')


router.get('/' , Conrollers.GetWelcome )
router.post('/register' , Conrollers.RegsiterUser )
router.post('/login' ,  Conrollers.login)



module.exports = router;