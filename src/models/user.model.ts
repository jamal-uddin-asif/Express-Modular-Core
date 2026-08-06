import { model, Schema } from "mongoose";
import { TUser } from "../types/user.interface";

const itemSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
 
},
{
  timestamps: true
}
);

export const User = model<TUser>("Users", itemSchema);
