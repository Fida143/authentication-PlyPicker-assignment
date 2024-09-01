"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductDetails = ({ params }: { params: { _id: string } }) => {
  const [productDetails, setProductDetails] = useState<any>({
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
    _id:""
  });

 

  const getProductDetails = async () => {
    try {
      const { data } = await axios.get(`/api/product/${params._id}`);
      data && setProductDetails(data.product);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRequest = async ()=>{
    try {
        const res = await axios.put(`/api/product/${productDetails._id}`,productDetails);
        console.log(res)
        toast.success("Product Updated Successfully")
    } catch (error) {
        console.log(error)
        toast.error("error while Upadating Product")
    }
  }
  useEffect(() => {
    getProductDetails();
  }, []);

  return (
   
        <form onSubmit={handleRequest}>
      <div className="bg-gray-900 text-white rounded-lg p-6 w-[400px] mx-auto mt-4 ">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-8">
            Product Image
          </label>
          <div className="border border-gray-500 rounded h-24 w-24 flex items-center justify-center bg-gray-700 mb-4">
            {productDetails.imageUrl !== "" ? (
              <img
                className="w-32 h-32 mb-4 bg-gray-800 rounded"
                src={productDetails.imageUrl}
                alt={productDetails.name}
              />
            ) : (
              <span className="text-gray-400 text-center">Product Image</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productDetails.name}
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                [e.target.name]: e.target.value,
              })
            }
            className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2"> Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                [e.target.name]: e.target.value,
              })
            }
            value={productDetails.description}
            className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Price</label>
          <input
            type="text"
            name="price"
            value={productDetails.price}
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                [e.target.name]: e.target.value,
              })
            }
            className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={productDetails.imageUrl}
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                [e.target.name]: e.target.value,
              })
            }
            className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Changes for Approval
        </button>
      </div>
      </form>
  );
};

export default ProductDetails;
