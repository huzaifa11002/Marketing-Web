'use client';
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import './custom.css'
import { urlFor } from '@/sanity/lib/image';

interface Props{
  clientData: Client[]
}

const ClientSlider = ({clientData}:Props) => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false }) 
  )
  return (
    <Carousel plugins={[plugin.current]} opts={{ loop: true }}>
  <CarouselContent>
    {clientData.map((client, index) => (
      <CarouselItem key={index} className="lg:basis-1/5 sm:basis-1/4 basis-1/3">
        <div className='w-full flex justify-center'>
          <Image src={urlFor(client.image).url()} alt="brand-logo" className='client-carasoul-img w-[80%] md:w-1/2' width={500} height={500} />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
  )
}

export default ClientSlider