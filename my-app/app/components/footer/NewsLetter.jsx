import React from "react";
import { TiArrowRightOutline } from "react-icons/ti";


const NewsLetter = () => {
  return (
    <div className="md:flex justify-around items-center bg-gray-200 p-4 min-h-[20vh]">
      <div className="text-2xl font-bold w-3/10 flex justify-center items-center">
        Exclusive launches, early offers and some fun. Be a part of our mailing
        list!
      </div>
      <form>
        <div className="flex gap-2 my-2">
          <input type='email' placeholder="Enter your Email..." className="border w-[80%] lg:w-[20rem] p-3 rounded-md"/>
          <button className="flex justify-center items-center gap-2 border-2 border-black rounded-md p-3 ">Subscribe
          <TiArrowRightOutline />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
