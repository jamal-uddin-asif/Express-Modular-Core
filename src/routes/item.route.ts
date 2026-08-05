import express from "express";
import { itemControllers } from "../controllers/item.controller";

const router = express.Router();

router.post("/", itemControllers.createItem);
router.get('/:id', itemControllers.getSignleItem)

export const  itemRoutes = router