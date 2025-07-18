import React from 'react'
import Clients from '../components/clients'
import HappyClient from '../components/HappyClient'
import type { Metadata } from "next";
import PortfolioList from '../components/PortfolioList';

export const metadata: Metadata = {
  title: "Influenca - Portfolio",
  description: "We’ve partnered with a wide range of brands across beauty, fashion, wellness, and lifestyle to execute influencer and UGC campaigns that deliver real impact. Our portfolio reflects our ability to merge creativity with strategy—building campaigns that not only look great but also perform. For beauty brands, we’ve managed TikTok and Instagram campaigns with creators producing authentic, high-performing content. In one cleansing cream campaign, 15 creators delivered videos that generated over 5 million views, strong engagement, and were repurposed for paid ads with high click-through rates. Our beauty campaigns often combine organic reach with UGC for ad libraries, giving brands content they can scale. In the fashion space, we executed a multi-style lingerie collaboration with U.S.-based creators. We sourced diverse talent, managed the creative direction, and delivered 2–6 short videos per style. The content was a mix of paid and gifted collaborations, and it resulted in powerful, relatable storytelling across platforms. Brands appreciated the variety and realism of the content, which increased viewer trust and interaction. We also help brands with new product launches, handling everything from influencer discovery and outreach to delivery of final video assets. A recent project with a beauty tool brand involved 20 creators across TikTok and Instagram and delivered over 12% engagement and a 3x ROI. We specialize in scroll-stopping UGC content that performs well in both organic and paid campaigns. Our team ensures the creators understand the brand’s message, values, and goals before production. This results in content that feels genuine, drives conversions, and builds long-term brand awareness. Each campaign is customized and optimized for performance. We take pride in delivering content that works—whether it’s for awareness, engagement, or conversions—backed by data, creative insight, and real creator influence.",
};

const page = () => {
  return (
    <>
    <div className='w-full bg-[#f8faff] py-10'>
                <div className="text-center">
                    <h1 className="lg:text-6xl text-4xl text-main font-extrabold uppercase inline-block">Portfolio</h1>
                </div>
            </div>
    <PortfolioList/>
    <Clients/>
    <HappyClient/>
    </>
  )
}

export default page
