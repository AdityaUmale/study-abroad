import { Router } from "express";
import { getAllUniversities, createUniversity } from "../controllers/universityController";

const router = Router();

router.get("/", getAllUniversities);
router.post("/", createUniversity);

export default router;
