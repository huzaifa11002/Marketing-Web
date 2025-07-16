export const dynamic = "force-dynamic";

import './custom.css'
import ClientSlider from "./ClientSlider"
import { client } from '@/sanity/lib/client';

const Clients = async() => {

  const query = `*[_type == "client"] {
image
}`;

  const clientData:Client[] = await client.fetch(query);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className='w-full'>
      <div className="text-center">
      <h2 className="lg:text-4xl sm:text-2xl text-xl text-main font-bold uppercase relative inline-block">our clients</h2>
      <div className='my-10'>
      <ClientSlider clientData={clientData}/>
      </div>
      </div>
      </div>
</div>
  )
}

export default Clients