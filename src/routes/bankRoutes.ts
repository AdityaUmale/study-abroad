import { Router } from "express";
import { getAllBanks, createBank } from "../controllers/bankController";

const router = Router();

router.get("/", getAllBanks);
router.post("/", createBank);

export default router;

