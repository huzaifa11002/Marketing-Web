import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';


const ServiceCard = (props: Service) => {
  return (
    <div className='flex flex-col gap-3 items-center justify-center p-5 box-border border-2 border-main rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 cursor-pointer'>
      <Image src={urlFor(props.icon).url()} alt='service-img' className='w-[45%] object-contain aspect-[3/2]' width={500} height={500}/>
      <h5 className='text-base lg:text-xl font-bold text-main uppercase'>{props.title}</h5>
      <p className='lg:text-base text-sm text-center text-gray-600'>{props.shortDescription}</p>
      <Link href={`/service/${props.title.toLowerCase().replace(/\s+/g, '-')}`} className='lg:text-base text-sm border border-main text-main px-4 py-2 rounded cursor-pointer hover:transition duration-300 hover:bg-main hover:text-white'>
      Learn More
      </Link>
    </div>
  )
}

export default ServiceCard