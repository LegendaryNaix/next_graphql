import mongoose, { Schema, model, models } from 'mongoose';
import * as schemaType from '@/backend/graphql/generated/schemaType';
// const bcrypt = require('bcryptjs');

const schema = new Schema<schemaType.User>({
  email: { type: String, required: true },
  password: { type: String, required: false },
});

export default models.User || model<schemaType.User>('User', schema);
