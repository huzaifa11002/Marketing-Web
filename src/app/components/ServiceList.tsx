export const dynamic = "force-dynamic";

import React from 'react'
import ServiceCard from './ServiceCard'
import { client } from '@/sanity/lib/client';

const ServiceList = async() => {

  const query = `*[_type == 'service']{
icon,
shortDescription,
title
}`;

  const ServiceData: Service[] = await client.fetch(query);
  return (
    <div className='grid lg:grid-cols-4 gap-5 my-10 grid-cols-1 xs:grid-cols-2 px-4 py-10'>
      {ServiceData.map((service, index) => (
        <ServiceCard
          key={index}
          {...service}
        />
      ))}
      </div>
  )
}

export default ServiceList
