import express from "express";
import { userControllers } from "../controllers/user.controller";

const route = express.Router();

route.post("/", userControllers.register);

export const userRoute = route;
