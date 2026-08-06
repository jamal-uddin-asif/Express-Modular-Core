import { Request, Response } from "express";
import { User } from "../models/user.model";
import jwt from "jsonwebtoken";
import config from "../config";

const register = async (req: Request, res: Response) => {
  try {
    const isExist = await User.findOne({ email: req.body.email });
    if (isExist) {
      return res.status(400).json({
        success: false,
        message: "Usesr already exist",
      });
    }

    const savedUser = await User.create(req.body);

    // TOKEN GENERATE
    const token = jwt.sign(
      { email: savedUser.email, role: savedUser.role },
      config.jwt_secret as string,
      { expiresIn: config.expiresIn },
    );

    // Omit password from response
    const userResponse = savedUser.toObject();
    delete userResponse.password;

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: userResponse,
      token: token,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to register user",
      error: error.message,
    });
  }
};


export const userControllers =  {
    register
}