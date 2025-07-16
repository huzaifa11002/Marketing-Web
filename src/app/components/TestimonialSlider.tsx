'use client';
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import './custom.css'
import TestimonialCard from './testimonialCard';

interface Props {
  TestimonialData: Testimonial[]
}

const ClientSlider = ({ TestimonialData }: Props) => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )
  return (
    <Carousel plugins={[plugin.current]} opts={{ loop: true }}>
      <CarouselContent>
        {TestimonialData.map((testimonial, index) => (
          <CarouselItem key={index} className="xs:basis-2/3 lg:basis-1/3">
            <TestimonialCard {...testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default ClientSlider