import Link from "next/link";
import React from "react";
import { MdNavigateNext } from "react-icons/md";

const Login = () => {
  return (
    <Link href='/login'>
      <button className='custom_width p-3 custom_margin lg:my-4  rounded-lg mb-4 font-bg-blue text-white flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <p>TREATS</p>
          <span> | </span>
          <p>Login and explore wide variety of rewards</p>
        </div>
        <div className='flex items-center justify-end'>
          Login
          <MdNavigateNext />
        </div>
      </button>
    </Link>
  );
};

export default Login;
