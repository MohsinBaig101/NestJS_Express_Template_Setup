import { Schema } from 'mongoose';

export const permissionSchema = new Schema(
  {
    displayName: String,
    slug: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    synchronize: true,
  },
);
