"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const verifyEmailPage = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
      setError(false)
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    setError(false)
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    setError(false)
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-4xl'>Verify Email</h1>
      <h2 className='p-2 bg-orange-500 text-black'>
        {token ? `${token}` : "No Token available"}
      </h2>
      {verified && (
        <div>
          <h2>User Verified successfully</h2>
          <Link href='/login'>Login</Link>
        </div>
      )}
      {error && (
        <div>
          <h2>Error</h2>
        </div>
      )}
    </div>
  );
};

export default verifyEmailPage;
