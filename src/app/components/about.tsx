export const dynamic = "force-dynamic";

import React from 'react'
import Image from "next/image"
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

  
const About = async() => {

  const query = `*[_type == 'about']{
    image,
    shortDescription
  }[0]`;

  const AboutData:About = await client.fetch(query);
  return (
    <div className='bg-[#f9f8fa] py-5'>
        <div className="container mx-auto px-4 py-10">
          <div className='flex flex-col gap-10 sm:justify-between sm:flex-row py-10 items-center'>
            <div className='w-full sm:w-1/2 flex justify-center'>
            <Image src={urlFor(AboutData.image).url()} alt='about-img' width={500} height={500}/>
            </div>
            <div className='w-full sm:w-1/2 flex flex-col gap-5 items-start'>
                <h3 className='text-base sm:text-xl lg:text-xl xl:text-2xl font-extrabold gradient-text'>About Us</h3>
                <p className='lg:text-base text-sm text-left'>{AboutData.shortDescription}</p>
            </div>
          </div>
          </div>
    </div>
  )
}

export default About