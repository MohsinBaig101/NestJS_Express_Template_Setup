import mongoose from 'mongoose';
const { Schema } = mongoose;
import mongoose_delete from 'mongoose-delete';

export const userSchema = new Schema(
  {
    firstName: { type: String, maxlength: 50 },
    lastName: { type: String, maxlength: 50 },
    email: { type: String, unique: true },
    password: { type: String },
    isActive: { type: Boolean, default: false },
    emailConfirmed: { type: Boolean, default: false },
    lastLogin: { type: Date },
    archived: { type: Date },
    roles: [{ type: mongoose.Types.ObjectId, ref: 'roles' }],
  },
  {
    timestamps: true,
    synchronize: true,
  },
);

// userSchema.plugin(mongoose_delete);
