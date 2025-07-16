import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const HappyClientCard = (props: HappyClient) => {

  return (
    <div className='flex flex-col justify-center items-center gap-1'>
      <Image src={urlFor(props.image).url()} alt='happy-img' width={100} height={100} />
      <span className='md:text-lg text-base' data-val={props.value}>{props.value}+</span>
      <h5 className='md:text-base text-sm gradient-text'>{props.label}</h5>
    </div>
  );
};

export default HappyClientCard;
