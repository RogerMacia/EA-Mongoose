import { Schema, model, Types } from 'mongoose';

// 1. Interface (Contracte d'Enginyeria)
export interface IAddress {
    _id?: string;
    country: string;
    city: string;
    street: string;
    door: number;
    user: Types.ObjectId;
}

// 2. Schema (Validació BBDD)
const addressSchema = new Schema<IAddress>({
    country: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    door: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

// 3. Model
export const AddressModel = model<IAddress>('Address', addressSchema);

async function getById(id: Types.ObjectId) {

}