import { Router } from "express";
import { getAllApplications, createApplication } from "../controllers/studentApplicationController";

const router = Router();

router.get("/", getAllApplications);
router.post("/", createApplication);

export default router;
