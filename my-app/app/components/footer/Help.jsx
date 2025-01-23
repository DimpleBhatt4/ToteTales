import React from "react";
import { MdCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
const Help = () => {
  return (
    <div className='rounded-lg md:w-[30vw] md:h-[30vh] p-4 font-bg-light_yellow font-text-brown '>
      <div className='font-bold sm:text-lg md:text-xl py-2'>Help is Always Here</div>
      <ul className="table w-full">
  {/* Call Us */}
  <li className="table-row">
    <div className="table-cell py-2">
      <div className="flex items-center gap-2">
        <MdCall className="text-xl" /> <span>Call Us</span>
      </div>
    </div>
    <div className="table-cell text-center py-2">:</div>
    <div className="table-cell py-2 px-4">+91 9836xxxx</div>
  </li>

  {/* Email Us */}
  <li className="table-row">
    <div className="table-cell py-2">
      <div className="flex items-center gap-2">
        <MdOutlineMail className="text-xl" /> <span>Email Us</span>
      </div>
    </div>
    <div className="table-cell text-center py-2">:</div>
    <div className="table-cell py-2 px-4">support@totetales.com</div>
  </li>

  {/* Open From */}
  <li className="table-row">
    <div className="table-cell py-2">
      <div className="flex items-center gap-2">
        <IoStorefrontOutline className="text-xl" /> <span>Open From</span>
      </div>
    </div>
    <div className="table-cell text-center py-2">:</div>
    <div className="table-cell py-2 px-4">9:00 AM - 5:30 PM</div>
  </li>
</ul>

    </div>
  );
};

export default Help;
