import React from 'react'
import AdminPortal from '../../components/adminPanel/adminPortal/AdminPortal'
import AddProduct from '../../components/adminPanel/addProduct/AddProduct'
import ViewProducts from '../../components/adminPanel/viewProducts/ViewProducts'

const page = () => {
  return (
    <div>
        <AdminPortal />
        <ViewProducts />
        {/* <AddProduct /> */}
    </div>
  )
}

export default page