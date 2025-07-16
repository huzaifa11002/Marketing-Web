export const dynamic = "force-dynamic";

import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

const WechatCard = async() => {

  const query = `*[_type == "weChat"]{
    userId,
    image
  }[0]`;

  const WeChatData:WeChat = await client.fetch(query);
  return (
    <div className='p-5 rounded-lg shadow-main shadow-lg flex sm:flex-row justify-between border border-main flex-col gap-10'>
        <div>
            <h1 className='text-2xl font-bold text-green-500'>WeChat QR Code</h1>
            <ol className='flex flex-col gap-2 mt-5 list-decimal list-inside text-sm lg:text-base'>
                <h6 className='mb-2 md:text-lg text-base font-extrabold'>How to connect with qr code scan in WeChat&#63;</h6>
                <li>Open WeChat and go to the &quot;Contacts&quot; tab.</li>
                <li>Tap on the &quot;+&quot; icon in the top right corner.</li>
                <li>Select &quot;Scan QR Code&quot; from the menu.</li>
            </ol>
        </div>
        <div className='p-5 rounded-lg lg:w-[20%] md:w-[30%] sm:w-1/2 w-full border-2 border-green-500'>
            <Image src={urlFor(WeChatData.image).url()} alt='qr-code-img' width={500} height={500}/>
            <p className='text-center mt-1 text-sm lg:text-base'>{WeChatData.userId}</p>
        </div>
    </div>
  )
}

export default WechatCard