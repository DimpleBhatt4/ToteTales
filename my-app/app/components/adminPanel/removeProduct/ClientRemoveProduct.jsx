"use client"
import React, { useState } from 'react'
import handleFetch from "@/app/utilis/server/handleFetch";
const ClientRemoveProduct = ({products}) => {
    const[allProducts, setAllProducts] = useState(products)
    const handleRemove = async (id) => {
        try {
          const response = await handleFetch(
            `http://localhost:3000/api/products/removeprod/${id}`,
            { method: "DELETE" }
          );
          if (response.error) {
            console.error("Error removing product:", response.error);
          } else {
            console.log("Product removed successfully!");
            // \?????????????????/
            setAllProducts(response)
          }
        } catch (error) {
          console.error("Failed to delete product:", error);
        }
      };
      
  return (
    <table className='table-auto border-collapse border border-gray-300 w-[80%] text-left my-4 mx-4'>
        <caption className='text-lg font-bold mb-4'>Product List</caption>
        <thead>
          <tr>
            <th scope='col' className='border border-gray-300 px-4 py-2'>
              P_id
            </th>
            <th scope='col' className='border border-gray-300 px-4 py-2'>
              Name
            </th>
            <th scope='col' className='border border-gray-300 px-4 py-2'>
              Category
            </th>
            <th scope='col' className='border border-gray-300 px-4 py-2'>
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {allProducts.length > 0 ? (
            allProducts.map((product) => (
              <tr key={product.p_id} className='hover:bg-gray-100'>
                <td className='border border-gray-300 px-4 py-2'>
                  {product.p_id}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  {product.name}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  {product.category}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  <button
                    onClick={() => handleRemove(product._id)}
                    className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='4' className='text-center py-4'>
                No products available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
  )
}

export default ClientRemoveProduct