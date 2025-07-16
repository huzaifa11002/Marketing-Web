import React from 'react'
import Clients from '../components/clients'
import HappyClient from '../components/HappyClient'
import type { Metadata } from "next";
import PortfolioList from '../components/PortfolioList';

export const metadata: Metadata = {
  title: "Influenca - Portfolio",
  description: "We are a Global Influencer Marketing Agency. Our team manages brand collaborations, creates influencer lists, sends emails, and scrapes data. Boost your sales with our help.",
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