export const dynamic = "force-dynamic";

import { client } from '@/sanity/lib/client';
import React from 'react'

const aboutDesc = async () => {
    const query = `*[_type == 'about']{
longDescription
}[0]`;
    const AboutData: About = await client.fetch(query);
    return (
        <div className='w-full sm:w-3/4 mx-auto text-center'>
        <p className='lg:text-base text-sm leading-[2.5rem]'>{AboutData.longDescription}</p>
        </div>
    )
}

export default aboutDesc