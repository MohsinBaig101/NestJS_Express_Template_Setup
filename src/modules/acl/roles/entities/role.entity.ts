import mongoose, { Schema } from 'mongoose';

const permissionSchema = new Schema({
  id: { type: mongoose.Types.ObjectId, required: true, unique: true },
  name: { type: String, required: true },
});

export const roleSchema = new Schema(
  {
    displayName: { type: String, required: true },
    slug: { type: String, required: true },
    permissions: permissionSchema,
  },
  {
    timestamps: true,
    synchronize: true,
  },
);
