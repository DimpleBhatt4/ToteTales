import React from 'react'

const adminPanel = () => {
  return (
    <div>
        {/* Nav search-Add*/}
        <nav className='flex px-2 py-4 justify-around items-center'>
          <h1 className='text-2xl font-bold'>Admin Panel</h1>
          {/* Search */}
            <div className='w-[40%]'>
                <input className='px-3 py-2 w-full rounded-md my-3 bg-[#F7CE28]' type='text' placeholder='Search for products' />
            </div>
          {/* Add Product  */}
            <div >
              <button className='px-3 py-2 rounded-md my-3 bg-[#F7CE28]'>Add Product</button>
            </div>
            {/* Remove Product  */}
            <div >
              <button className='px-3 py-2 rounded-md my-3 bg-[#F7CE28]'>Remove Product</button>
            </div>
        </nav>
    </div>
  )
}

export default adminPanel