/* eslint-disable linebreak-style */
import { Router } from 'express'
import UserController from '../controllers/UserController'
import PostController from '../controllers/PostController'

const routes: Router = Router()

routes.post('/createUser', UserController.createUser)
routes.get('/listUser', UserController.listUsers)
routes.post('/createPost', PostController.createPosts)
routes.get('/listPost/:id', PostController.listPost)
routes.delete('/deletePost/:id', PostController.deletePosts)
routes.put('/updatePost/:id', PostController.updatePosts)

export default routes
