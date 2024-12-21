"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const universityController_1 = require("../controllers/universityController");
const router = (0, express_1.Router)();
router.get("/", universityController_1.getAllUniversities);
router.post("/", universityController_1.createUniversity);
exports.default = router;
