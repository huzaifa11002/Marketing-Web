import React from 'react'
import ServiceList from '../components/ServiceList'
import About from '../components/about'
import Clients from '../components/clients'
import HappyClient from '../components/HappyClient'
import type { Metadata } from "next";
import ChooseUs from '../components/ChooseUs'

export const metadata: Metadata = {
    title: "Influenca - Our Service",
    description: "1. Influencer Campaign Management: We plan, execute, and manage end-to-end influencer marketing campaigns tailored to your goals. 2. UGC (User-Generated Content) Creation: High-performing UGC videos for ads, social content, and organic use by experienced creators. 3. Influencer Discovery & Outreach: We source, vet, and negotiate with creators that align with your brand’s values and target audience. 4. Product Seeding & Gifting Campaigns: Organic brand awareness through gifting campaigns to micro and macro influencers. 5. Paid Collab Campaigns: Strategic partnerships with creators for sponsored posts, product reviews, and branded content. 6. Reporting & ROI Analysis: Detailed post-campaign analytics to help you measure performance and optimize future efforts.",
};

const page = () => {
    return (
        <>
            <div className='w-full bg-[#f8faff] py-10'>
                <div className="text-center">
                    <h1 className="lg:text-6xl text-4xl text-main font-extrabold uppercase inline-block">Our Service</h1>
                </div>
            </div>
            <div className="container mx-auto">
                <ServiceList />
            </div>
            <About />
            <Clients />
            <ChooseUs/>
            <HappyClient />
        </>
    )
}

export default page
