import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMedia = () => {
  return (
      <ul className="flex gap-2 justify-start border-b-2 m-4 pb-4">
        <li>
          <Link href=''>
            <Image src='/fb.svg' height={30} width={30} alt='Facebook logo' />
          </Link>
        </li>
        <li>
          <Link href=''>
            <Image src='/instagram.svg' height={30} width={30} alt='Instagram logo' />
          </Link>
        </li>
        <li>
          <Link href=''>
            <Image src='/twitter.svg' height={30} width={30} alt='Twitter logo' />
          </Link>
        </li>
        <li>
          <Link href=''>
            <Image src='/yt.svg' height={30} width={30} alt='Youtube logo' />
          </Link>
        </li>
      </ul>
  );
};

export default SocialMedia;
