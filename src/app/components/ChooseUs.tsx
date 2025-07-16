export const dynamic = "force-dynamic";

import React from 'react'
import Image from "next/image"
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

const query = `*[_type == "chooseUs"]{
image,
point1,
point2,
point3,
point4,
point5
}[0]`;


const ChooseUs = async() => {
const ChooseUsData:Choose= await client.fetch(query);
  return (
    <div className='bg-[#f9f8fa] py-5'>
      <div className="container mx-auto px-4">
        <div className='flex flex-col-reverse gap-10 sm:justify-between sm:flex-row py-10 items-center'>
          <div className='w-full sm:w-1/2 flex flex-col gap-5'>
            <h3 className='text-base sm:text-xl lg:text-xl xl:text-2xl font-extrabold gradient-text'>Why Choose Us?</h3>
            <ul className='flex flex-col gap-3'>
              <li className='flex flex-row gap-2 item-center'><IoCheckmarkDoneOutline className='w-6 h-6'/><p className='lg:text-base text-sm'>{ChooseUsData.point1}</p></li>
              <li className='flex flex-row gap-2 item-center'><IoCheckmarkDoneOutline className='w-6 h-6'/><p className='lg:text-base text-sm'>{ChooseUsData.point2}</p></li>
              <li className='flex flex-row gap-2 item-center'><IoCheckmarkDoneOutline className='w-6 h-6'/><p className='lg:text-base text-sm'>{ChooseUsData.point3}</p></li>
              <li className='flex flex-row gap-2 item-center'><IoCheckmarkDoneOutline className='w-6 h-6'/><p className='lg:text-base text-sm'>{ChooseUsData.point4}</p></li>
              <li className='flex flex-row gap-2 item-center'><IoCheckmarkDoneOutline className='w-6 h-6'/><p className='lg:text-base text-sm'>{ChooseUsData.point5}</p></li>
            </ul>
          </div>
          <div className='w-full sm:w-1/2 flex justify-center'>
            <Image src={urlFor(ChooseUsData.image).url()} alt='about-img' width={500} height={500}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs