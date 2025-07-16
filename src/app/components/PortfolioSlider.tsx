'use client';
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import PortfolioCard from './PortfolioCard'

interface Props{
  PortfolioData:Portfolio[]
}

const PortfolioSlider = ({PortfolioData}:Props) => {

  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false })
  )

  return (
    <div className='my-10'>
      <Carousel plugins={[plugin.current]} opts={{ loop: true }}>
        <CarouselContent>
          {PortfolioData.map((portfolio, index) => (
            <CarouselItem key={index} className='xs:basis-2/3 md:basis-1/3'>
              <PortfolioCard {...portfolio} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default PortfolioSlider