"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex =
    /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:\\[\x01-\x09\x0b\x0c\x0e-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState("Enter Password");
  const [emailAlert, setEmailAlert]= useState('Enter valid email address')
  const [errorMessage, setErrorMessage] = useState("");

  const onSignup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post("/api/users/signup", user);
      router.push("/login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("User already exist");
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    }
  };

  const handlePassword = (e) => {
    const newPassword = e.target.value;

    if (!passwordRegex.test(newPassword)) {
      setEmailAlert("Enter valid email address");
    } else {
      setEmailAlert("");
    }
    setUser({ ...user, password: newPassword });
  };

  const handleEmail = (e)=>{
    const newEmail = e.target.value
    if (!emailRegex.test(newEmail)) {
      setEmailAlert("Enter valid Email address");
    } else {
      setEmailAlert("");
    }
    setUser({ ...user, email: newEmail });
  }
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.userName.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div>
        <div className='my-4'>
          {/* Image */}
          <Image
            className={"rounded-md"}
            src={"/Welcome_signup.png"}
            height={342}
            width={468}
            alt='Welcome signup image'
          />
        </div>
        <h1 className='text-xl text-center'>
          {loading ? "Processing..." : "Signup"}
        </h1>
        <form>
          {/* User name */}
          <div>
            <label className='' htmlFor='userName'>
              User Name :
              <span className='text-red-400 text-xs mx-2'>
                {user.userName === "" && "Enter valid user name"}
              </span>
            </label>
            <br />
            <input
              className='border border-[#F7CE28] px-3 py-2 w-full rounded-md my-2'
              type='text'
              id='userName'
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              placeholder='Enter username here...'
            />
          </div>

          {/* email */}
          <div>
            <label htmlFor='email'>
              Email :
              <span className='text-red-400 text-xs mx-2'>
                {emailAlert && emailAlert}
              </span>
            </label>
            <br />
            <input
              className='border border-[#F7CE28] px-3 py-2 w-full rounded-md my-2'
              type='email'
              id='email'
              value={user.email}
              onChange={handleEmail}
              placeholder='Enter email here...'
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor='password'>
              Password:
              <span className='text-red-400 text-xs mx-2'>{passwordAlert}</span>
            </label>
            <br />
            <input
              className='border border-[#F7CE28] px-3 py-2 w-full rounded-md my-2'
              type='password'
              id='password'
              value={user.password}
              onChange={handlePassword}
              placeholder='Enter password here...'
            />
            <ul className='text-sm my-2'>
              <li
                className={`list-disc ${
                  user.password.length >= 8 ? "text-green-500" : "text-red-500"
                }`}>
                At least 8 characters
              </li>
              <li
                className={`list-disc ${
                  /[A-Z]/.test(user.password)
                    ? "text-green-500"
                    : "text-red-500"
                }`}>
                Includes at least one uppercase letter
              </li>
              <li
                className={`list-disc ${
                  /[a-z]/.test(user.password)
                    ? "text-green-500"
                    : "text-red-500"
                }`}>
                Includes at least one lowercase letter
              </li>
              <li
                className={`list-disc ${
                  /\d/.test(user.password) ? "text-green-500" : "text-red-500"
                }`}>
                Includes at least one digit
              </li>
              <li
                className={`list-disc ${
                  /[@$!%*?&]/.test(user.password)
                    ? "text-green-500"
                    : "text-red-500"
                }`}>
                Includes at least one special character
              </li>
            </ul>
          </div>
          {/* Error Message */}
          <p className='text-red-500 text-sm'>{errorMessage}</p>
          <button
            className={`px-3 py-2 rounded-md my-3 bg-[#F7CE28] ${
              buttonDisabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-yellow-500"
            }`}
            onClick={onSignup}>
            Signup
          </button>
        </form>
        <div className='my-2'>
          Already existing user?
          <Link className='text-[#F7CE28]' href='/login'>
            {" "}
            Login in here{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
