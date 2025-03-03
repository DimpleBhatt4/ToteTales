"use client";
import React, { useState } from "react";
import { TiArrowRightOutline } from "react-icons/ti";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.status === 200) {
        setMessage("🎉 Thank you for subscribing! Check your email.");
        setEmail("");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="md:flex justify-around items-center font-bg-light_yellow font-text-brown p-4 min-h-[20vh]">
      <div className="text-2xl font-bold w-3/10 flex justify-center items-center">
        Exclusive launches, early offers, and some fun. Be a part of our mailing list!
      </div>
      <form onSubmit={handleSubscribe}>
        <div className="flex gap-2 my-2">
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email..."
            className="border-2 border-[#b17a02] font-bg-light_yellow font-text-brown w-[80%] lg:w-[20rem] p-3 rounded-md"
            required
          />
          <button type="submit" className="flex justify-center items-center gap-2 font-bg-brown text-white rounded-md p-3">
            Subscribe <TiArrowRightOutline />
          </button>
        </div>
        {message && <p className="text-center text-sm text-red-500">{message}</p>}
      </form>
    </div>
  );
};

export default NewsLetter;
