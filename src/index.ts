import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database";
import universityRoutes from "./routes/universityRoutes";
import bankRoutes from "./routes/bankRoutes";
import userRoutes from "./routes/userRoutes";
import studentApplicationRoutes from "./routes/studentApplicationRoutes";

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/universities", universityRoutes);
app.use("/api/banks", bankRoutes);
app.use("/api/users", userRoutes);
app.use("/api/student-applications", studentApplicationRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
