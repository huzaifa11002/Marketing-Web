import React from 'react'
import {PortableText} from '@portabletext/react';
import type {PortableTextBlock} from '@portabletext/types';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

interface ServiceMain extends Service {
    longDescription: PortableTextBlock[];
    fileUpload?: {
        asset: {
            _ref: string;
            url?: string;
        };
    };
}

const ServiceDetail = (props: ServiceMain) => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-center items-center'>
                <Image src={urlFor(props.image).url()} alt='service-img' width={500} height={500}/>
            </div>
            <div>
                <h2 className="lg:text-4xl sm:text-2xl text-xl text-main font-bold uppercase relative inline-block">{props.title}</h2>
                <div className='py-5'>
                <div className='lg:text-base text-sm'>
                <PortableText
                    value={props.longDescription}/>
                    </div>

                {props.fileUpload?.asset?.url && (
                    <div className='mt-10'>
                        <Link
                            href={props.fileUpload.asset.url}
                            target='_blank'
                            download
                            className='lg:text-base text-sm bg-main border border-main text-white px-4 py-2 rounded cursor-pointer hover:transition duration-300 hover:bg-white hover:text-main'
                        >
                            Example File
                        </Link>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default ServiceDetail