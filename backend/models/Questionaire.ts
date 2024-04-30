import mongoose, { Schema, model, models } from 'mongoose';
import * as schemaType from '@/backend/graphql/generated/schemaType';
// const bcrypt = require('bcryptjs');

const schema = new Schema<schemaType.Questionaire>({
  label: { type: String, required: true },
  answer_type: { type: Number, required: false },
  answer: { type: Object, required: false },
});

export default models.Questionaire || model<schemaType.User>('Questionaire', schema);
