import { itemRoutes } from "./item.route";
import express from "express";
import { userRoute } from "./user.route";

const router = express.Router();

const moduleRouter = [
  {
    path: "/items",
    route: itemRoutes,
  },
  {
    path: "/users",
    route: userRoute,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
