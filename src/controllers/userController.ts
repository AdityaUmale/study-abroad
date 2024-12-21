import { Request, Response } from "express";
import User from "../models/User";

// Get all users
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        const { email, firstName, lastName, password } = req.body;

        const user = new User({ email, firstName, lastName, password });
        await user.save();

        res.status(201).json(user);
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
};
