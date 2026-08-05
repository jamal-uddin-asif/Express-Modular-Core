import { Request, Response } from "express";
import { Item } from "../models/item.model";

// Create event
const createItem = async (req: Request, res: Response) => {
  try {
    const savedItem = await Item.create(req.body);

    res.status(201).json({
      success: true,
      message: "Item created successfully",
      data: savedItem,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Item created successfully",
      error: error.message,
    });
  }
};


export const itemControllers =  {
    createItem
}
