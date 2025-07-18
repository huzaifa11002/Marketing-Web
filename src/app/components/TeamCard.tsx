import React from 'react'
import Image from "next/image"
import { urlFor } from '@/sanity/lib/image';
const TeamCard = (props:Team) => {
  return (
    <div className='relative rounded-lg'>
        <Image src={urlFor(props.image).url()} alt='team-img' className='w-full min-h-[350px] max-h-fit object-cover object-top rounded-lg' width={500} height={500}/>
        <div className='flex flex-col gap-2 items-center justify-center p-4 xl:p-5 box-border text-white absolute bottom-0 left-0 right-0 bg-main rounded-lg'>
            <h6 className='lg:text-base text-sm font-bold capitalize'>{props.name}</h6>
            <p className='lg:text-sm text-xs font-light capitalize text-center'>{props.position}</p>
        </div>
    </div>
  )
}

export default TeamCard
