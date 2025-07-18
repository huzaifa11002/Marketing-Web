import React from 'react'
import Team from '../components/team'
import Clients from '../components/clients'
import HappyClient from '../components/HappyClient'
import AboutDesc from '../components/aboutDesc';
import type { Metadata } from "next";
import ChooseUs from '../components/ChooseUs';

export const metadata: Metadata = {
  title: "Influenca - About Us",
  description: "At Influenca, we are passionate storytellers, brand builders, and digital strategists who specialize in influencer marketing that drives real results. We believe that in today’s fast-paced digital landscape, authentic content and human connection are more powerful than traditional advertising. That’s why we work with creators who truly align with your brand values—turning followers into loyal customers. Founded with the vision to bridge the gap between brands and the creator economy, our agency focuses on strategic collaborations that convert, not just perform. From discovering high-performing influencers to managing full-scale campaigns and generating thumb-stopping user-generated content (UGC), we offer a comprehensive suite of services tailored to your goals and budget. We’ve helped brands grow their reach, boost engagement, and increase sales across platforms like TikTok, Instagram, and YouTube. Whether you’re a startup looking for awareness or an established brand seeking performance-driven partnerships, our team has the expertise to make it happen. What sets us apart is our data-first approach combined with a creative mindset. We don’t just match brands with influencers—we craft meaningful partnerships backed by insights, trend research, and a deep understanding of audience behavior. Every campaign we run is optimized for both storytelling and measurable impact. We are not just an agency—we are your growth partner in the creator economy.",
};

const page = () => {
    return (
        <>
            <div className='w-full bg-[#f8faff] py-10'>
                <div className="text-center">
                    <h1 className="lg:text-6xl text-4xl text-main font-extrabold uppercase inline-block">About Us</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 my-10">
                <AboutDesc />
            </div>
            <Team />
            <Clients />
            <ChooseUs/>
            <HappyClient />
        </>
    )
}

export default page
