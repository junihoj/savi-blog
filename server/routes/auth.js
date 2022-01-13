import express, { Router } from 'express'
import {checkDuplicatedEmail} from '../middlewares/auth'
import {
    register,
    csrfController,
    login
} from '../controllers/auth'

const router = express.Router()


router.get('/csrf-token', csrfController)
router.post('/register',checkDuplicatedEmail, register);
router.post('/login', login)





module.exports = router;