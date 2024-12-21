"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentApplicationController_1 = require("../controllers/studentApplicationController");
const router = (0, express_1.Router)();
router.get("/", studentApplicationController_1.getAllApplications);
router.post("/", studentApplicationController_1.createApplication);
exports.default = router;
