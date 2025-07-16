import React from 'react'
import Image from "next/image"
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
const TeamCard = (props:Team) => {
  return (
    <div className='relative rounded-lg'>
        <Image src={urlFor(props.image).url()} alt='team-img' className='w-full object-cover object-top rounded-lg' width={500} height={500}/>
        <div className='flex flex-col gap-2 items-center justify-center p-1 xl:p-5 box-border text-white absolute bottom-0 left-0 right-0 bg-main rounded-lg'>
            <h6 className='lg:text-base text-sm font-bold capitalize'>{props.name}</h6>
            <p className='lg:text-sm text-xs font-light capitalize'>{props.position}</p>
            <ul className='flex flex-row gap-2 mb-1'>
              <li><Link href={props.facebook}><FaFacebookF className='w-5 h-5' /></Link></li>
              <li><Link href={props.instagram}><FaInstagram className='w-5 h-5' /></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default TeamCard