export const dynamic = "force-dynamic";

import React from 'react'
import PortfolioSlider from './PortfolioSlider';
import { client } from '@/sanity/lib/client';

const Portfolio = async () => {

    const query = `*[_type == 'project']{
image,
logo
}`;

    const PortfolioData: Portfolio[] = await client.fetch(query)

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="text-center">
                <h2 className="lg:text-4xl sm:text-2xl text-xl text-main font-bold uppercase relative inline-block">Portfolio</h2>
            </div>
            <div className='my-10'>
                <PortfolioSlider PortfolioData={PortfolioData} />
            </div>
        </div>
    )
}

export default Portfolio