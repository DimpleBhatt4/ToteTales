import React from 'react'
import AdminPortal from '../../components/adminPanel/adminPortal/AdminPortal'
import AddProduct from '../../components/adminPanel/addProduct/AddProduct'
import ViewProducts from '../../components/adminPanel/viewProducts/ViewProducts'
import RemoveProduct from '../../components/adminPanel/removeProduct/RemoveProduct'
const page = () => {
  return (
    <div>
        <AdminPortal />
        <AddProduct />
        {/* <ViewProducts /> */}
        {/* <RemoveProduct /> */}

    </div>
  )
}

export default page