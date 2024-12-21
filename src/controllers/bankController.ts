import { Request, Response } from "express";
import Bank from "../models/Banks";

// Get all banks
export const getAllBanks = async (req: Request, res: Response) => {
    try {
        const banks = await Bank.find();
        res.status(200).json(banks);
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new bank
export const createBank = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        const bank = new Bank({ name });
        await bank.save();

        res.status(201).json(bank);
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
};
