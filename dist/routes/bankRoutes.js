"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bankController_1 = require("../controllers/bankController");
const router = (0, express_1.Router)();
router.get("/", bankController_1.getAllBanks);
router.post("/", bankController_1.createBank);
exports.default = router;
