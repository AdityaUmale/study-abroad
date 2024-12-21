import {Request, Response} from 'express';
import  University  from '../models/University';

export const getAllUniversities = async (req: Request, res: Response) => {
    try {
        const universities = await University.find();
        res.status(200).json(universities);
    } catch (error : any) {
        res.status(500).json({ erro: error.message });
    }
};

export const createUniversity = async (req: Request, res: Response) => {
    try {
        const { name, country } = req.body;
        const university = new University( { name, country } );
        await university.save();

        res.status(201).json(university);
    } catch (error : any) {
        res.status(500).json({ erro: error.message });
    }
}

