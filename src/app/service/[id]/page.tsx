export const dynamic = "force-dynamic";

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HappyClient from '@/app/components/HappyClient';
import ServiceDetail from '@/app/components/ServiceDetail';
import type { PortableTextBlock } from '@portabletext/types';
import type { Metadata } from "next";
import { client } from '@/sanity/lib/client';

export const metadata: Metadata = {
  title: "Influenca - Our Services",
  description: "We are a Global Influencer Marketing Agency. Our team manages brand collaborations, creates influencer lists, sends emails, and scrapes data. Boost your sales with our help.",
};


interface ServiceMain extends Service {
  longDescription: PortableTextBlock[];
  fileUpload?: {
          asset: {
              _ref: string;
              url?: string;
          };
      };  
}

const query = `*[_type == 'service']{
  title,
  image,
  longDescription,
  fileUpload{asset->{url,_ref}}
}`;

const page = async ({ params }: { params: Params }) => {
    const tab = params.id.replace(/-/g, ' ');
    const ServiceData: ServiceMain[] = await client.fetch(query)
    return (
        <>
            <div className='w-full bg-[#f8faff] py-10'>
                <div className="text-center">
                    <h1 className="lg:text-6xl text-4xl text-main font-extrabold uppercase inline-block">Our Services</h1>
                </div>
            </div>
            <div className='container mx-auto'>
                <Tabs defaultValue={tab} className="w-full flex justify-between my-10 flex-col-reverse sm:flex-row px-5 gap-5">
                    <div className='lg:w-[60%] w-full'>
                        {ServiceData.map((service, index) => (
                            <TabsContent value={service.title.toLowerCase()} key={index}>
                                <ServiceDetail {...service} />
                            </TabsContent>
                        ))}
                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <div className='flex justify-center items-center'>
                            <div className='sm:w-[80%] w-full bg-[#f8faff] p-5 box-border'>
                                <h5 className='text-base sm:text-xl lg:text-xl xl:text-2xl text-center font-extrabold border-b border-dashed border-main pb-1'>All Services</h5>
                                <TabsList className='h-fit flex flex-col justify-start gap-5 bg-transparent mt-3'>
                                    {ServiceData.map((service, index) => (
                                        <TabsTrigger key={index} value={service.title.toLowerCase()} className='capitalize data-[state=active]:bg-main data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-main w-full text-base sm:text-xl lg:text-xl xl:text-2xl'>{service.title}</TabsTrigger>

                                    ))}
                                </TabsList>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
            <HappyClient />
        </>
    )
};

export default page