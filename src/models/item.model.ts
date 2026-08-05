import { model, Schema } from "mongoose";
import { TItem } from "../types/item.interface";

const itemSchema = new Schema<TItem>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  stock: { type: Number, required: true },
  rating: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
  tags: { type: [String], required: true },
},
{
  timestamps: true
}
);

export const Item = model<TItem>("Item", itemSchema);
