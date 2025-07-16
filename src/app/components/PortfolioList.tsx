export const dynamic = "force-dynamic";

import { client } from '@/sanity/lib/client';
import PortfolioSlider from './PortfolioSlider'

const PortfolioList = async() => {

    const query = `*[_type == 'project']{
    image,
    logo
    }`;

    const PortfolioData: Portfolio[] = await client.fetch(query)
  return (
    <div className="container mx-auto px-4 py-10">
    <PortfolioSlider PortfolioData={PortfolioData} />
    </div>
  )
}

export default PortfolioList