export const dynamic = "force-dynamic";

import React from 'react'
import TestimonialSlider from './TestimonialSlider';
import { client } from '@/sanity/lib/client';

const TestimonialList = async() => {

  const query = `*[_type == 'testimonial']{
name,
country,
image,
review
}`;

  const TestimonialData:Testimonial[] = await client.fetch(query);
  return (
    <div className='my-10 w-full xl:w-[80%] mx-auto'>
      <TestimonialSlider TestimonialData={TestimonialData} />
    </div>
  )
}

export default TestimonialList