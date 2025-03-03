"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/check", { credentials: "include" });
        const data = await res.json();
        
        if (data.isAuthenticated) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <Link href={isLoggedIn ? "/profile" : "/login"}>
      <button className='custom_width p-3 custom_margin lg:my-4 rounded-lg mb-4 font-bg-blue text-white flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <p>TREATS</p>
          <span> | </span>
          <p>{isLoggedIn ? "Go to Profile" : "Login and explore rewards"}</p>
        </div>
        <div className='flex items-center justify-end'>
          {isLoggedIn ? "Profile" : "Login"}
          <MdNavigateNext />
        </div>
      </button>
    </Link>
  );
};

export default Login;
