import { Schema, model } from "mongoose";
import { IUser } from "../interfaces";

const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
},{
    timestamps: true
})

export default model<IUser>("User", UserSchema);
