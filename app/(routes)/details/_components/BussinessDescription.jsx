import Image from 'next/image';
import React from 'react';

const BussinessDescription = ({bussiness}) => {
    return  bussiness?.name&&(
        <div>
           <h2 className='font-bold text-[25px]'>
              <p className='mt-4 text-lg text-gray-600'>{bussiness.about}</p>
           </h2>
           <h2 className='mt-8 font-bold text-[25px]'>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
                    {bussiness?.images?.map((item,idx)=>(
                       <Image
                       src={item?.url}
                       width={700}
                       height={200}
                       className='rounded-lg'
                       alt='images' key={idx}/>
                    ))}
                </div>
            </h2>
        </div>
    );
};

export default BussinessDescription;