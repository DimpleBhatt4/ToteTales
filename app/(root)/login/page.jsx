"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  // Error state
  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post("/api/users/login", user);

      router.push("/profile");
    } catch (error) {

      if (error.response && error.response.status === 400) {
        setErrorMessage("Username/Password didn't match");
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div className="my-4">
          {/* Image */}
          <Image
            className={"rounded-md"}
            src={"/Welcome_signup.png"}
            height={342}
            width={468}
            alt="Welcome signup image"
          />
        </div>
        <h1 className="text-xl text-center">
          {loading ? "Processing..." : "Login"}
        </h1>
        <form>
          {/* Email */}
          <div>
            <label htmlFor="email">Email :</label>
            <br />
            <input
              className="border border-[#F7CE28] px-3 py-2 w-full rounded-md my-2"
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter email here..."
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              className="border border-[#F7CE28] px-3 py-2 w-full rounded-md my-2"
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter password here..."
            />
          </div>
          {/* Error Message */}
          <p className="text-red-500 text-sm">{errorMessage}</p>

          {/* Submit Button */}
          <button
            className={`px-3 py-2 rounded-md my-3 bg-[#F7CE28] ${
              buttonDisabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-yellow-500"
            }`}
            onClick={onLogin}
          >
            Login
          </button>
        </form>
        <div className="my-2">
          Don't have an account?
          <Link className="text-[#F7CE28]" href="/signup">
            {" "}
            Signup here{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
