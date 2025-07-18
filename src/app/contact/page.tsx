import React from 'react'
import Contact from '../components/contact'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Influenca - Contact Us",
  description: "Looking to grow your brand through powerful influencer marketing? We’d love to hear from you! At Influenca, we specialize in connecting brands with high-performing content creators across TikTok, Instagram, and YouTube. Whether you need a full-service influencer campaign, UGC video production, or strategic creator partnerships, our team is here to help. 🌍 Work with us from anywhere—our agency operates globally with clients and creators across the US, UK, and beyond. 📅 Schedule a discovery call or request a custom influencer marketing plan tailored to your brand. We respond quickly and work with both startups and established brands looking to scale their presence through creator-driven content. Whether you're launching a beauty product, fashion line, skincare brand, or wellness product—we’ll help you connect with your ideal audience through authentic and results-driven campaigns. Boost your brand visibility, increase conversions, and build trust with influencer marketing that works. Contact us today to get started!",
};

const page = () => {
  return (
    <>
    <div className='w-full bg-[#f8faff] py-10'>
                    <div className="text-center">
                        <h1 className="lg:text-6xl text-4xl text-main font-extrabold uppercase inline-block">Contact Us</h1>
                    </div>
                </div>
    <Contact/>
    </>
  )
}

export default page
