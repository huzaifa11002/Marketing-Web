import React from 'react'
import './custom.css'
import ServiceList from './ServiceList'
const Service = () => {
  return (
    <div className='bg-[#f8faff] py-5'>
    <div className="container mx-auto px-4 py-10">
          <div className="text-center">
          <h2 className="lg:text-4xl sm:text-2xl text-xl text-main font-bold uppercase relative inline-block">Our Services</h2>
          <ServiceList />
      </div>
</div>
    </div>
  )
}

export default Service