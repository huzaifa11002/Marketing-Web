import React from 'react'
import Team from '../components/team'
import Clients from '../components/clients'
import HappyClient from '../components/HappyClient'
import AboutDesc from '../components/aboutDesc';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Influenca - About Us",
  description: "We are a Global Influencer Marketing Agency. Our team manages brand collaborations, creates influencer lists, sends emails, and scrapes data. Boost your sales with our help.",
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
            <HappyClient />
        </>
    )
}

export default page