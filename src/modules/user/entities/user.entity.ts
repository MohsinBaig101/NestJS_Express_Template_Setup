import mongoose from 'mongoose';
const { Schema } = mongoose;

export const userSchema = new Schema({
    firstName: { type: String, maxlength: 50 },
    lastName: { type: String, maxlength: 50 },
    email: { type: String, unique: true },
    password: { type: String },
    isActive: { type: Boolean, default: false },
    emailConfirmed: { type: Boolean, default: false },
    lastLogin: { type: Date },
    archived: { type: Date },
    createdAt: { type: Date, default: new Date },
    updatedAt: { type: Date, default: new Date }
});