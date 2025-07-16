export const dynamic = "force-dynamic";

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Button from './Button';

const Hero = async () => {

  const query = `*[_type == 'hero']{
  shortTitle,
  longTitle,
  heroImage,
  buttonText,
  description
}[0]`;

  const HeroData: Hero = await client.fetch(query);
  
  return (
    <div className="w-full bg-white">
      <div className='container mx-auto'>
        <div className='flex flex-col w-full sm:justify-between sm:items-center sm:flex-row py-14 gap-10 px-5'>
          <div className='text-main w-full sm:w-1/2 flex flex-col gap-5'>
            <h1 className='lg:text-5xl text-3xl font-extrabold uppercase leading-normal md:whitespace-nowrap'>
              <span className='text-xs sm:text-sm font-extrabold gradient-text'>
                {HeroData.shortTitle}
              </span><br />

              {HeroData.longTitle?.split(' ').map((word, index) => {
                if (word.toLowerCase() === 'marketing') {
                  return (
                    <span key={index} className='lg:text-6xl text-4xl gradient-text'>
                      {word + ' '}
                      <br />
                    </span>
                  );
                }
                return word + ' ';
              })}
            </h1>
            <p className='lg:text-base text-sm'>{HeroData.description}</p>
            <Button value={HeroData.buttonText}/>
            <ul className='flex flex-row gap-2'>
              <li className='border-2 border-main p-2 rounded-full hover:scale-105'><Link href='/'><FaFacebookF className='sm:w-6 sm:h-6 w-5 h-5' /></Link></li>
              <li className='border-2 border-main p-2 rounded-full hover:scale-105'><Link href='/'><FaInstagram className='sm:w-6 sm:h-6 w-5 h-5' /></Link></li>
              <li className='border-2 border-main p-2 rounded-full hover:scale-105'><Link href='/wechat'><IoLogoWechat className='sm:w-6 sm:h-6 w-5 h-5' /></Link></li>
            </ul>
          </div>
          <div className='flex justify-center w-full sm:w-1/2'>
            <Image src={urlFor(HeroData.heroImage).url()} alt='Hero-image' width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero