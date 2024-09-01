"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import ProductPage from "../products/page";
import Link from "next/link";

const Dashboard = () => {
  const [products, setProducts] = useState<any>([]);
  const [newProduct,setNewProduct] = useState({
    name:"",
    description:"",
    price:0,
    imageUrl :""
  })

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreateProduct = async () =>{
    try {
      const res = await axios.post('/api/product', newProduct);
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  
  const getProducts = async () => {
    try {
      const { data } = await axios.get("/api/product");
      console.log(data.products, "data");
      data && setProducts(data.products);
      console.log(products, "ppp");
    } catch (error) {
      console.log(error);
    }
  };
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  useEffect(() => {
    getProducts();
    console.log(products, "p");
  }, []);
  useEffect(()=>{},[newProduct])
  return (
    <>
    <div className="p-5">
      {role == "admin" ? (
        <div>
          <h1 className="uppercase">Admin dashboard</h1>
        </div>
      ) : (
        <div>
          <h1 className="uppercase">User dashboard</h1>
          {/* <div className="h-screen flex items-center justify-center bg-gray-800 text-white"> */}
            <button
              onClick={openModal}
              className="bg-blue-600 py-2 px-4 rounded hover:bg-blue-700 transition absolute right-5 top-28"
            >
              Add New Product
            </button>

            {/* <ProductEditModal isOpen={isModalOpen} onClose={closeModal} /> */}

            {isModalOpen ?  ( 
              <form onSubmit={handleCreateProduct} >
              <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center z-50 ">
              <div className="bg-gray-900 text-white rounded-lg p-6 w-1/3 relative">
              <button className="absolute top-5 right-5 font-bold text-xl " onClick={closeModal}>X</button>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Product Image
                  </label>
                  <div className="border border-gray-500 rounded h-24 w-24 flex items-center justify-center bg-gray-700 mb-4">
                   {(newProduct.imageUrl !== "") ? <img className="w-32 h-32 mb-4 bg-gray-800 rounded" src={newProduct.imageUrl} alt={newProduct.name} /> : <span className="text-gray-400 text-center">Product Image</span> } 
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name='name'
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct,[e.target.name]:e.target.value})}
                    className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Product Description
                  </label>
                  <input
                    type="text"
                    name={'description'}
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct,[e.target.name]:e.target.value})}
                    className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct,[e.target.name]:e.target.value})}

                    className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Image URL
                  </label>
                  <input
                    type="text"
                    value={newProduct.imageUrl}
                    name="imageUrl"
                    onChange={(e) => setNewProduct({...newProduct,[e.target.name]:e.target.value})}
                    className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white"
                  />
                </div>
                <div className="text-gray-400 mb-4">
                  Here, all fields are editable
                </div>
                <button
                  type="submit"
                  // onClick={closeModal}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Add Product for Approval
                </button>
              </div>
            </div>
            </form>
            ) : "" }
          
          {/* </div> */}
          <h2 className="text-2xl font-semibold my-8 ml-4">All Product</h2>
          {products.map((product: any) => (
     
        <Link href={`/products/${product._id}`} >
            <ProductPage product={product} />
        </Link>
          ))}
        </div>
      )}
      </div>
    </>
  );
};



export default Dashboard;
