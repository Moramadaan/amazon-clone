import React from 'react'
import FooterMid from './FooterMid'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <div className='font-titleFont'>
        <FooterTop />
        <FooterMid />
        <FooterBottom />
    </div>
  )
}

export default Footer