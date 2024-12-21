"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApplication = exports.getAllApplications = void 0;
const StudentApplication_1 = __importDefault(require("../models/StudentApplication"));
// Get all student applications
const getAllApplications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const applications = yield StudentApplication_1.default.find()
            .populate("student")
            .populate("universities.university")
            .populate("universities.banks.bank");
        res.status(200).json(applications);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllApplications = getAllApplications;
// Create a new application
const createApplication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { student, universities, status } = req.body;
        const application = new StudentApplication_1.default({
            student,
            universities,
            status,
        });
        yield application.save();
        res.status(201).json(application);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createApplication = createApplication;
