"use client"
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Share, Timer, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const BussinessInfo = ({bussiness}) => {
  
    return bussiness?.email&&(
        <div className="md:flex gap-4 items-center">
            
            <Image src={bussiness?.images[0]?.url} alt={bussiness.name} height={200} width={150}  className='rounded-full h-[150] object-cover'/>
        <div className='flex justify-between items-center w-full'>
            <div className="flex flex-col items-baseline mt-4 md:mt-0 gap-3">
                <h2 
                className='text-primary p-1 px-2 text-lg bg-purple-100 rounded-full'
                >{bussiness?.categori[0]?.name}</h2>
                <h2 className='text-[40px] font-bold' >{bussiness.name}</h2>
                <h2 className='flex gap-2 text-lg font-semibold text-gray-600'><MapPin/>{bussiness.address}</h2>
                <h2 className='flex gap-2 text-lg font-semibold text-gray-600'><Mail/>{bussiness.email}</h2>
            </div>
<div className='flex flex-col gap-5 items-end'>
<Button><Share/></Button>
<h2 className='flex gap-2 text-xl text-primary'><User/>{bussiness.contactPerson}</h2>
<h2 className='flex gap-2 text-xl text-gray-500'><Timer/>Available 8.00 Am to 10.00 PM</h2>

</div>
     </div>  
        </div>
    );
};

export default BussinessInfo;