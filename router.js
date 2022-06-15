import Router from 'express'
import PostController from './PostController.js'


const router = new Router()

router.post('/registration', PostController.registration)
router.post('/login',PostController.login)
router.get('/users', PostController.getUser)



export default router;