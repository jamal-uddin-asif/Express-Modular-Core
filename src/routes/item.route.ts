import express from "express";
import { itemControllers } from "../controllers/item.controllers";

const router = express.Router();

router.post("/", itemControllers.createItem);
router.get('/:id', itemControllers.getSignleItem)

export const  itemRoutes = router