import React from 'react'
import type { Metadata } from "next";
import WechatCard from '../components/WechatCard';

export const metadata: Metadata = {
  title: "Influenca - WeChat",
  description: "We are a Global Influencer Marketing Agency. Our team manages brand collaborations, creates influencer lists, sends emails, and scrapes data. Boost your sales with our help.",
};

const page = () => {
  return (
    <div className='container mx-auto px-4 py-10'>
    <WechatCard/>
    </div>
  )
}

export default page