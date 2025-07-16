export const dynamic = "force-dynamic";

import { client } from '@/sanity/lib/client';
import HappyClientCard from './HappyClientCard';

const HappyClient = async () => {

  const query = `*[_type == "happyClient"]{
  label,
  image,
  value
}`;

  const HappyClientData: HappyClient[] = await client.fetch(query);

  return (
    <div className='w-full bg-gray-100'>
      <div className='container mx-auto py-10'>
        <div className='flex justify-center flex-col md:flex-row gap-20 text-main font-bold capitalize'>
          {HappyClientData.map((item, index) => (
            <HappyClientCard
              {...item} key={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}
export default HappyClient