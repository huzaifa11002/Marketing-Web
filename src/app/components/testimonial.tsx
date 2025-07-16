import React from 'react'
import TestimonialList from './TestimonialList'

const Testimonial = () => {
    return (
        <div className='bg-[#f8faff] py-5'>
            <div className="container mx-auto px-4 py-10">
                <div className="text-center">
                    <h2 className="lg:text-4xl sm:text-2xl text-xl text-main font-bold uppercase relative inline-block">Client Reviews</h2>
                    <TestimonialList/>
                </div>
            </div>
        </div>
    )
}

export default Testimonial