import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { urlFor } from '@/sanity/lib/image'

const PortfolioCard = (props:Portfolio) => {
    return (
        <div>
            <Link href='/' className='rounded-lg'>
                <div className='relative'>
                    <Image src={urlFor(props.image).url()} alt='work-img' className='rounded-xl' width={500} height={500}/>
                    <div className='absolute bottom-5 left-3'>
                        <Image src={urlFor(props.logo).url()} alt='brand-logo' className='w-[80%] md:w-full' width={100} height={100}/>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PortfolioCard