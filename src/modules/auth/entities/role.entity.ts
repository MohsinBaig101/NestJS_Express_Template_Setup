import mongoose, { Schema } from "mongoose";

export const rolesSchema = new Schema({
    name: { type: "string", required: true },
    displayName: { type: "string", required: true },
    description: { type: "string" },
    permissions: [{ type: mongoose.Types.ObjectId, ref: 'permissions' }],
},
    {
        timestamps: true
    })