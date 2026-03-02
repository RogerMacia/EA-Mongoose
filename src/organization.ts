import { Schema, model } from 'mongoose';

// 1. Interface (Contracte d'Enginyeria)
export interface IOrganization {
  _id?: string;
  name: string;
  country: string;
}

// 2. Schema (Validació BBDD)
const organizationSchema = new Schema<IOrganization>({
  name: { type: String, required: true },
  country: { type: String, required: true }
});

// 3. Model
export const OrganizationModel = model<IOrganization>('Organization', organizationSchema);
