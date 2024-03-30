"use client"

import GlobalApi from '@/app/_components/_services/GlobalApi';
import { Button } from '@/components/ui/button';
import { NotebookPen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const SuggestedBussiness = ({ bussiness }) => {
    console.log(bussiness);
    const [bussinessList, setBussinessList] = useState([]);

    useEffect(() => {
        if (bussiness) {
            getBussinessList();
        }
    }, [bussiness]);

    const getBussinessList = () => {
        if (bussiness?.categori?.[0]?.name) {
            console.log(bussiness?.categori[0].name);
            GlobalApi.getBussinessCategory(bussiness.categori[0].name)
                .then((resp) => {
                    setBussinessList(resp.bussinessLists);
                })
                .catch((error) => {
                    console.error('Error fetching business list:', error);
                });
        } else {
            console.warn('Bussiness or its category name is not properly defined.');
        }
    };

    return bussiness?.email && (
        <div className=' md:pl-10'>
            <div className="md:block">
                <Button className="flex gap-2  py-6 ">
                    <NotebookPen />Appointment
                </Button>

               <div className='hidden md:block'>
               <h2 className='font-bold text-lg mt-4 mb-4 '>Similar Business</h2>
                <div >
                    {bussinessList && bussinessList?.map((busy, idx) => (
                        <Link href={'/details/'+busy.id} key={idx} className="flex gap-2 mt-6 mb-4 hover:border rounded-lg p-2 cursor-pointer hover:shadow-md border-primary hover:bg-purple-100">
                            <Image src={busy?.images?.[0]?.url}
                                width={80}
                                height={80}
                                alt={busy?.name}
                                className='rounded-lg object-cover h-36 w-36'
                            />
                            <div className=' mb-4 '>
                                <h2 className="font-bold">{busy?.name}</h2>
                                <h2 className='text-primary'>{busy?.contactPerson}</h2>
                                <h2 className="text-gray-400">{busy?.address}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
               </div>
            </div>
        </div>
    );
};

export default SuggestedBussiness;