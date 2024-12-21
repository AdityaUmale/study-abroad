import { Schema, model } from "mongoose";
import { IUniversity } from "../interfaces";

const UniversitySchema = new Schema<IUniversity>({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default model<IUniversity>("University", UniversitySchema);