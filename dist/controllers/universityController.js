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
exports.createUniversity = exports.getAllUniversities = void 0;
const University_1 = __importDefault(require("../models/University"));
const getAllUniversities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const universities = yield University_1.default.find();
        res.status(200).json(universities);
    }
    catch (error) {
        res.status(500).json({ erro: error.message });
    }
});
exports.getAllUniversities = getAllUniversities;
const createUniversity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, country } = req.body;
        const university = new University_1.default({ name, country });
        yield university.save();
        res.status(201).json(university);
    }
    catch (error) {
        res.status(500).json({ erro: error.message });
    }
});
exports.createUniversity = createUniversity;
