import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    _id?: string;
    name: string;
    password: string;
    email: string;
    createdAt: string;
}