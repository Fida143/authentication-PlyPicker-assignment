// models/Product.ts
import mongoose, { Schema, Document } from 'mongoose';

// export interface IProduct extends Document {
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// }

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

// const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
export default Product;
