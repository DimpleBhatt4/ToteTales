import React from 'react'
import NewsLetter from './NewsLetter'
import FooterLinks from './FooterLinks'
import QuickLinks from './QuickLinks'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <footer className=' w-full'>
      {/* <NewsLetter /> */}
      <FooterLinks />
      <SocialMedia />
    </footer>
  )
}

export default Footer