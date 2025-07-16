export const dynamic = "force-dynamic";

import React from 'react'
import TeamCard from './TeamCard'
import { client } from '@/sanity/lib/client';

const Team = async () => {

  const query = `*[_type == 'team']{
image,
    name,
    position,
    facebook,
    instagram
}`;

  const TeamData:Team[] = await client.fetch(query)
  return (
    <div className='w-full py-10 bg-[#f9f8fa]'>
      <div className="container mx-auto px-4 py-10">
        <div className="text-center">
          <h2 className="lg:text-4xl sm:text-2xl text-xl text-main font-bold uppercase relative inline-block">Our team</h2>
        </div>
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-5 py-10 w-full xl:w-3/4 mx-auto'>
        {TeamData.map((team,index)=>(
          <TeamCard {...team} key={index}/>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Team