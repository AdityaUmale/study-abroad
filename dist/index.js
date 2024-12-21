"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./config/database"));
const universityRoutes_1 = __importDefault(require("./routes/universityRoutes"));
const bankRoutes_1 = __importDefault(require("./routes/bankRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const studentApplicationRoutes_1 = __importDefault(require("./routes/studentApplicationRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, database_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/universities", universityRoutes_1.default);
app.use("/api/banks", bankRoutes_1.default);
app.use("/api/users", userRoutes_1.default);
app.use("/api/student-applications", studentApplicationRoutes_1.default);
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
