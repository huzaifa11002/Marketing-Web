export const dynamic = "force-dynamic";

import React from 'react'
import Image from "next/image"
import { LuSendHorizontal} from "react-icons/lu";
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

const Contact = async() => {

const query = `*[_type == "contact"] {
image
}[0]`;

const ContactData:Contact= await client.fetch(query);

    return (
        <div className="container mx-auto px-4 py-10">
                <div className='flex flex-col gap-10 md:justify-between md:flex-row items-center my-10'>
                    <div className='flex justify-center w-full md:w-[40%]'>
                        <Image src={urlFor(ContactData.image).url()} alt='contact-img' width={500} height={500}/>
                    </div>
                    <div className='w-full md:w-[60%] flex flex-col gap-5 items-start bg-[#f8faff] p-10 rounded-lg'>
                        <h3 className='text-base sm:text-xl lg:text-xl xl:text-2xl font-extrabold gradient-text'>Get in Touch</h3>

                        <form action="https://formsubmit.co/afriditalha88@gmail.com" method="POST" className='grid grid-cols-1 gap-5 sm:grid-cols-2 w-full xl:text-base sm:text-sm text-xs text-main'>
                        
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://localhost:3000/contact" />

                        <div className='text-left'>
                            <label>Name <span className='text-red-600'>*</span></label>
                            <input name='name' type="text" className='w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:border-main' placeholder='ex:John' required/>
                        </div>
                        <div className='text-left'>
                            <label>Email <span className='text-red-600'>*</span></label>
                            <input name='email' type="email" className='w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:border-main' placeholder='ex:name@mail.com' required/>
                        </div>
                        <div className='text-left'>
                            <label>Subject</label>
                            <input name='subject' type="text" className='w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:border-main' placeholder='ex:influencer list' />
                        </div>
                        <div className='text-left'>
                            <label>WeChat ID</label>
                            <input name='wechat_id' type="number" className='w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:border-main' placeholder='ex:wxid:12345' />
                        </div>
                        <div className='text-left sm:col-span-2'>
                            <label>Message/Requirement <span className='text-red-600'>*</span></label>
                            <textarea name='message' className='w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:border-main' rows={4} placeholder='Enter your message' required></textarea>
                        </div>
                        <button type='submit' className='sm:text-sm text-xs w-fit border border-main text-main px-4 py-2 rounded cursor-pointer hover:bg-main hover:text-white button-transition flex flex-row items-center gap-3 hover:gap-4 hover:scale-105 group'><span>Send Now </span><LuSendHorizontal  className='group-hover:-rotate-45 group-hover:mb-1 group-hover:button-transition'/></button>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Contact