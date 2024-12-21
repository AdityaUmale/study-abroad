import { Schema, model } from "mongoose";
import { IStudentApplication } from "../interfaces";

const StudentApplicationSchema = new Schema<IStudentApplication>({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  universities: [{
    university: {
      type: Schema.Types.ObjectId,
      ref: 'University',
      required: true
    },
    banks: [{
      bank: {
        type: Schema.Types.ObjectId,
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

export default model<IStudentApplication>("StudentApplication", StudentApplicationSchema);
