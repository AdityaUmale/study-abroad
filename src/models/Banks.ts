import { Schema, model } from "mongoose";
import { IBank } from "../interfaces";

const BankSchema = new Schema<IBank>({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default model<IBank>("Bank", BankSchema);