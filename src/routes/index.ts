import { itemRoutes } from "./item.route";
import express from 'express'

const router = express.Router()

const moduleRouter = [
    {
        path: '/items',
        route: itemRoutes
    },

]

moduleRouter.forEach(route=> router.use(route.path, route.route))

export default router