import React from 'react'
import Image from "next/image"
import { urlFor } from '@/sanity/lib/image'

const TestimonialCard = (props:Testimonial) => {
  return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <div className="flex items-center mb-4">
            <Image
                src={urlFor(props.image).url()}
                alt="client-img"
                className="w-12 h-12 rounded-full mr-4 object-top"
                width={48}
                height={48}
            />
            <div className='text-left'>
                <h3 className="text-lg font-semibold text-main">{props.name}</h3>
                <p className="text-gray-600">{props.country}</p>
            </div>
            </div>
            <p className="text-gray-700 text-left h-[100px]">
            {props.review}
            </p>
        </div>
  )
}

export default TestimonialCard