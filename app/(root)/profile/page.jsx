"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
const profilePage = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const getUserDetails = async () => {
    const response = await axios.post("/api/users/me");
    setData(response.data.data);
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className='p-12 flex gap-8'>
      <div>
        <Image
          src='/profile.png'
          className=' w-32 object-cover rounded-full'
          height={512}
          width={512}
          alt={"Profile icon"}
        />
      </div>
      <div>
        <div className='font-bold text-lg'>Hi, {data.userName}</div>
        <div className='flex gap-4'>
          <Link href={"/profile"}>
            <button className='px-3 py-2 rounded-md my-3 bg-[#F7CE28]'>
              Profile
            </button>
          </Link>
          <Link href={"/cart"}>
            <button className='px-3 py-2 rounded-md my-3 bg-[#F7CE28]'>
              My Cart
            </button>
          </Link>
          <Link href={"/wishlist"}>
            <button className='px-3 py-2 rounded-md my-3 bg-[#F7CE28]'>
              My Wishlist
            </button>
          </Link>

          <button
            className='px-3 py-2 rounded-md my-3 bg-[#F7CE28]'
            onClick={logout}>
            Logout
          </button>
        </div>
        {/* When user clicked on Profile */}
        <div>
          {/* User Name */}
          <div>
            <span>User Name :</span>
            <br />
            <div className='border border-[#F7CE28] px-3 py-2 w-full rounded-md my-2'>
              {data.userName}
            </div>
          </div>
          {/* Email */}
          <div>
            <span>Email :</span>
            <br />
            <div className='border border-[#F7CE28] px-3 py-2 w-full rounded-md my-2'>
              {data.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profilePage;
