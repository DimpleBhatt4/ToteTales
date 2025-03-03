import React from 'react'
import Image from "next/image";

const Banner = ({img_link}) => {
  return (
    <div className="w-full my-8">
  <Image
    className="w-full h-auto"
    src={img_link}
    height={477}
    width={4202}
    alt="banner"
  />
</div>

  )
}

export default Banner