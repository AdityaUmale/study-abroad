"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StudentApplicationSchema = new mongoose_1.Schema({
    student: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    universities: [{
            university: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'University',
                required: true
            },
            banks: [{
                    bank: {
                        type: mongoose_1.Schema.Types.ObjectId,
                        ref: 'Bank',
                        required: true
                    },
                    status: {
                        type: String,
                        enum: ['pending', 'approved', 'rejected'],
                        default: 'pending'
                    }
                }]
        }],
    status: {
        type: String,
        enum: ['draft', 'submitted', 'completed'],
        default: 'draft',
        trim: true
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("StudentApplication", StudentApplicationSchema);
