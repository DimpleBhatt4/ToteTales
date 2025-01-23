"use client"
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const profilePage = () => {
  const router = useRouter();
  const [data, setData] = useState('nothing')
  const getUserDetails = async ()=>{
    const response = await axios.post('/api/users/me')
    console.log(response.data.data._id)
    setData(response.data.data._id)
  }

  const logout = async ()=>{
    try {
      await axios.get('/api/users/logout')
      router.push('/login')
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile page</h1>
      <h2>{data==='nothing' ? "No data to display" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <button className="px-3 py-2 rounded-md my-3 bg-[#F7CE28]"  onClick={logout}>Logout</button>
      <button className="px-3 py-2 rounded-md my-3 bg-[#F7CE28]"  onClick={getUserDetails}>Get User Details</button>
    </div>
  )
}

export default profilePage