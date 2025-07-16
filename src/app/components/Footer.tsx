import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="bg-main text-white w-full px-5">
            <div className='container mx-auto py-10'>
                <div className='flex flex-col md:flex-row md:justify-between items-center gap-10'>
                    <div className='w-full md:w-1/4 flex flex-col gap-5'>
                        <Link href="/" className="w-40">
                            <Logo />
                        </Link>
                        <p className='xl:text-base sm:text-sm text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non laborum harum minima consequuntur delectus nobis optio et numquam, ratione inventore?</p>
                    </div>
                    <div className='w-full md:w-3/4 flex flex-col md:flex-row md:justify-between gap-5 capitalize'>
                        <ul className='xl:text-base sm:text-sm text-xs flex flex-col gap-1'>
                            <h5 className='xl:text-lg sm:text-base text-sm mb-2 font-extrabold'>Quick links</h5>
                            <li><Link href='/about'>about</Link></li>
                            <li><Link href='/service'>service</Link></li>
                            <li><Link href='/portfolio'>portfolio</Link></li>
                            <li><Link href='/contact'>contact</Link></li>
                        </ul>

                        <ul className='xl:text-base sm:text-sm text-xs flex flex-col gap-1'>
                            <h5 className='xl:text-lg sm:text-base text-sm mb-2 font-extrabold capitalize'>Our Services</h5>
                            <li><Link href='/service/influencer-list'>influencer list</Link></li>
                            <li><Link href='/service/manage-campaign'>manage campaign</Link></li>
                            <li><Link href='/service/data scrapping'>data scrapping</Link></li>
                            <li><Link href='/service/email handling'>email handling</Link></li>
                        </ul>

                        <ul className='xl:text-base sm:text-sm text-xs flex flex-col gap-1'>
                            <h5 className='xl:text-lg sm:text-base text-sm mb-2 font-extrabold'>top collabs</h5>
                            <li><Link href='/service/influencer-list'>Toshiba</Link></li>
                            <li><Link href='/service/manage-campaign'>Orlo</Link></li>
                            <li><Link href='/service/data scrapping'>123RF</Link></li>
                            <li><Link href='/service/email handling'>Midea</Link></li>
                        </ul>

                        <ul className='xl:text-base sm:text-sm text-xs flex flex-col gap-1'>
                            <h5 className='xl:text-lg sm:text-base text-sm mb-2 font-extrabold'>get in touch</h5>
                            <div className='flex flex-row gap-2'>
                            <li className='border-2 border-white p-1 rounded-full hover:scale-105'><Link href='/'><FaFacebookF className='w-5 h-5' /></Link></li>
                            <li className='border-2 border-white p-1 rounded-full hover:scale-105'><Link href='/'><FaInstagram className='w-5 h-5' /></Link></li>
                            <li className='border-2 border-white p-1 rounded-full hover:scale-105'><Link href='/wechat'><IoLogoWechat className='w-5 h-5' /></Link></li>
                            </div>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='text-center border-t border-white py-5'>
                    <p className='xl:text-base sm:text-sm text-xs'>© {new Date().getFullYear()} All rights reserved | Huzaifa Khan</p>
                </div>
        </footer>
    )
}

export default Footer