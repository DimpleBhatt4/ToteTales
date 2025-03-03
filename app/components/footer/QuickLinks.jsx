import Link from 'next/link'
import React from 'react'

const QuickLinks = () => {
  return (
    <div className='text-center md:flex gap-10 font-text-blue'>
        {/* Col-1 */}
        <ul className='quickLink__ul'>
            <li className='font-bold'>Categories</li>
            <li>
                <Link href='/sale'>Sale</Link>
            </li>
            <li>
                <Link href='/category/Wallets_and_Clutches'>Wallets</Link>
            </li>
            <li>
                <Link href='/category/Tote_Bags'>Tote</Link>
            </li>
            <li>
                <Link href='/category/Wallets_and_Clutches'>Clutches</Link>
            </li>
            <li>
                <Link href='/category/Backpacks'>Travel Story Collection</Link>
            </li>
            <li>
                <Link href='/category/Laptop_Bags'>Laptop Bag</Link>
            </li>
        </ul>
        {/* Col-2 */}
        <ul className='quickLink__ul'>
            <li className='font-bold'>Bags By Colous</li>
            <li>
                <Link href=''>Black Colour Bags</Link>
            </li>
            <li>
                <Link href=''>Beige Colour Bags</Link>
            </li>
            <li>
                <Link href=''>Brown Colour Bags</Link>
            </li>
            <li>
                <Link href=''>Blue Colour Bags</Link>
            </li>
            <li>
                <Link href=''>Pink Colour Bags</Link>
            </li>
            <li>
                <Link href=''>White Colour Bags</Link>
            </li>
        </ul>
        {/* Col-3 */}
        <ul className='quickLink__ul'>
            <li className='font-bold'>Help and FAQs</li>
            <li>
                <Link href='/wishlist'>My Wishlist</Link>
            </li>
            <li>
                <Link href='/cart'>My Cart</Link>
            </li>
            <li>
                <Link href=''>Corporate Bulk Orders</Link>
            </li>
            <li>
                <Link href=''>Register Warranty</Link>
            </li>
            
        </ul>
    </div>
  )
}

export default QuickLinks