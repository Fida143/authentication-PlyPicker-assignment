"use client"
import { useState } from 'react';
// import { IProduct } from '../models/Product';
import { IProduct } from '../../models/productModel';

interface ProductPageProps {
  product: IProduct;
}

const ProductPage: React.FC<ProductPageProps> = (props) => {
  console.log(product,'pro')



  return (

    
    <>
 
  
    <div className=" w-2/3 h-[200px] flex gap-3 mt-5 cursor-pointer  mx-auto p-8 border border-gray-300 rounded-lg bg-gray-900 text-white transform transition-transform duration-300 hover:scale-105">
      {/* <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Product Image</label>
          <img src={imageUrl} alt="Product Image" className="w-32 h-32 mb-4 bg-gray-800 rounded" />
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-600 rounded bg-gray-800 text-white"
            placeholder="Image URL"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-600 rounded bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Product Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-600 rounded bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-1 p-2 w-full border border-gray-600 rounded bg-gray-800 text-white"
            min="0"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
        >
          Submit Changes for Approval
        </button>
      </form> */}
       <div><img className="w-32 h-32 mb-4 bg-gray-800 rounded" src={props.product.imageUrl} alt={props.product.name} /></div>
       <div>
        <h2 className='capitalize text-xl font-semibold'>{props.product.name}</h2>
        <p className='text-gray-500'>{props.product.description}</p>
        <span>$ {props.product.price}</span>
       </div>
    </div>
    </>
  );
};

export default ProductPage;
