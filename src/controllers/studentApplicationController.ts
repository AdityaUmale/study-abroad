import { Request, Response } from "express";
import StudentApplication from "../models/StudentApplication";

// Get all student applications
export const getAllApplications = async (req: Request, res: Response) => {
    try {
        const applications = await StudentApplication.find()
            .populate("student")
            .populate("universities.university")
            .populate("universities.banks.bank");
        res.status(200).json(applications);
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new application
export const createApplication = async (req: Request, res: Response) => {
    try {
        const { student, universities, status } = req.body;

        const application = new StudentApplication({
            student,
            universities,
            status,
        });
        await application.save();

        res.status(201).json(application);
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
};
