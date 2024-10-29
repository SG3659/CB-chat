import {Hono} from 'hono'

import * as authController from "../controllers/auth"

const authRoute =new Hono()
authRoute.post('/signup',authController.signup)
// authRoute.post('/login', authController.login)
export {authRoute}