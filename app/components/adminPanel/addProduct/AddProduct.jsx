"use client";
import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    p_id: "",
    category: "",
    actual_price: "",
    sale_price: "null",
    name: "",
    description: "",
    rating: "",
    img_url: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')
  const onProductAdd = async (e)=>{
    e.preventDefault();
    try {
        setLoading(true);
        const response = await axios.post('/api/products/adminPanel', product)
        setProduct({
            p_id: "",
            category: "",
            actual_price: "",
            sale_price: "null",
            name: "",
            description: "",
            rating: "",
            img_url: "",
          })
    } catch (error) {
        setAlertMessage("Product ID already exist!")
    }
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form className='w-1/3 lg:w-1/3 md:w-1/2 sm:w-full sm:mx-4 bg-white shadow-lg rounded-lg p-10  my-4'>
        {/* Product ID */}
        <div className='flex flex-col gap-2 my-2'>
          <label htmlFor='p_id' className='text-lg font-semibold'>
            Product ID:
          </label>
          <input
            className='border border-[#F7CE28] px-4 py-2 rounded-md text-base w-full'
            type='number'
            id='pId'
            value={product.p_id}
            onChange={(e) => setProduct({ ...product, p_id: e.target.value })}
            placeholder='Enter product ID...'
          />
        </div>
        {/* CATEGORY */}
        <div className='flex flex-col gap-2 my-2'>
          <label htmlFor='category' className='text-lg font-semibold'>
            Category:
          </label>
          <input
            className='border border-[#F7CE28] px-4 py-2 rounded-md text-base w-full'
            type='text'
            id='category'
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            placeholder="Enter product's category..."
          />
        </div>
        {/* actual_price */}
        <div className='flex flex-col gap-2 my-2'>
          <label htmlFor='actual_price' className='text-lg font-semibold'>
            Actual Price:
          </label>
          <input
            className='border border-[#F7CE28] px-4 py-2 rounded-md text-base w-full'
            type='number'
            id='pId'
            value={product.actual_price}
            onChange={(e) =>
              setProduct({ ...product, actual_price: e.target.value })
            }
            placeholder='Enter actual price...'
          />
        </div>
        {/* sale_price */}
        <div className='flex flex-col gap-2 my-2'>
          <label htmlFor='sale_price' className='text-lg font-semibold'>
            Sale Price:
          </label>
          <input
            className='border border-[#F7CE28] px-4 py-2 rounded-md text-base w-full'
            type='number'
            id='sale_price'
            value={product.sale_price}
            onChange={(e) =>
              setProduct({ ...product, sale_price: e.target.value })
            }
            placeholder="Enter product's sale price (if applicable)..."
          />
        </div>
        {/* name */}
        <div className='flex flex-col gap-2 my-2'>
          <label htmlFor='name' className='text-lg font-semibold'>
            Name:
          </label>
          <input
            className='border border-[#F7CE28] px-4 py-2 rounded-md text-base w-full'
            type='text'
            id='name'
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            placeholder="Enter product's name..."
          />
        </div>
        {/* description */}
        <div className='flex flex-col gap-2 my-2'>
          <label htmlFor='description' className='text-lg font-semibold'>
            Description:
          </label>
          <input
            className='border border-[#F7CE28] px-4 py-2 rounded-md text-base w-full'
            type='text'
            id='description'
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            placeholder="Enter product's description..."
          />
        </div>
        {/* rating */}
        <div className='flex flex-col gap-2 my-2'>
          <label htmlFor='rating' className='text-lg font-semibold'>
            Rating:
          </label>
          <input
            className='border border-[#F7CE28] px-4 py-2 rounded-md text-base w-full'
            type='number'
            id='rating'
            value={product.rating}
            onChange={(e) => setProduct({ ...product, rating: e.target.value })}
            placeholder="Enter product's rating..."
          />
        </div>
        {/* img url */}
        <div className='flex flex-col gap-2 my-2'>
          <label htmlFor='img_url' className='text-lg font-semibold'>
            Image url path:
          </label>
          <input
            className='border border-[#F7CE28] px-4 py-2 rounded-md text-base w-full'
            type='text'
            id='img_url'
            value={product.img_url}
            onChange={(e) =>
              setProduct({ ...product, img_url: e.target.value })
            }
            placeholder="Enter product's image url path..."
          />
        </div>
        {/* launch date */}
        <div className='flex flex-col gap-2 my-2'>
          <label htmlFor='launchDate' className='text-lg font-semibold'>
            Launch Date:
          </label>
          <input
            className='border border-[#F7CE28] px-4 py-2 rounded-md text-base w-full'
            type='date'
            id='launchDate'
            value={product.launchDate}
            onChange={(e) =>
              setProduct({ ...product, launchDate: e.target.value })
            }
            placeholder="Choose product's launch date..."
          />
        </div>
        {
            <p>{alertMessage}</p>
        }
        <button
          className={`px-3 py-2 rounded-md my-3 bg-[#F7CE28] ${
            buttonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-yellow-500"
          }`}
          onClick={onProductAdd}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
