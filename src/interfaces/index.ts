import { Types } from "mongoose";

export interface IUser {
    _id?: Types.ObjectId;
    email: string;
    firstName: string;
    lastName: string;
    password: string;  
    createdAt: Date;
    updatedAt: Date;
  }

export interface IUniversity {
    _id? : Types.ObjectId;
    name : string;
    country : string;
    createdAt : Date;
}

export interface IBank {
    _id? : Types.ObjectId;
    name : string;
    createdAt : Date;
}

export interface ISelectedBank {
    bank : Types.ObjectId;
    status : 'pending' | 'approved' | 'rejected';
    appliedAt : Date;
}

export interface IUniversityApplication {
    university : Types.ObjectId;
    selectedBanks : ISelectedBank[];
}

export interface IStudentApplication {
    _id? : Types.ObjectId;
   student : Types.ObjectId;
   universities : IUniversityApplication[];
   status : 'draft' | 'submitted' | 'completed';
   createdAt : Date;
   updatedAt : Date;
}
   