import Image from "next/image";
import React, { useContext } from "react";
import QuickLinks from "./QuickLinks";
import Help from "./Help";

const FooterLinks = () => {
 
  return (
    <div className=''>
      {/* PayLinks icons */}
      <div className='flex gap-2 justify-end border-b-2 m-4 pb-4'>
        <Image
          src='/stripe_icon1.svg'
          height={50}
          width={50}
          alt='Stripe icon'
        />
        <Image
          src='/paypal_icon.svg'
          height={50}
          width={50}
          alt='Paypal icon'
        />
        <Image src='/pay_icon.svg' height={50} width={50} alt='Pay icon' />
        <Image src='/visa_icon.svg' height={50} width={50} alt='Visa icon' />
        <Image
          src='/master_icon.svg'
          height={50}
          width={50}
          alt='Master icon'
        />
      </div>
      {/* links and Help */}
      <div className="md:flex m-4 gap-20 justify-center items-center">
        <QuickLinks className='w-[50vw]' />
        <Help className='w-[50vw]' />
      </div>
    </div>
  );
};

export default FooterLinks;
