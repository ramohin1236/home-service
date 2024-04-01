"use client"
import  GlobalApi  from '@/app/_components/_services/GlobalApi';
import { useEffect, useState } from 'react';
import BussinessInfo from '../_components/BussinessInfo';
import SuggestedBussiness from '../_components/SuggestedBussiness';
import BussinessDescription from '../_components/BussinessDescription';
import { signIn, useSession } from 'next-auth/react';


const BussinessDetails = ({params}) => {
    const {data,status}=useSession();
    const [bussiness, setBussiness] =useState([])
  
    
 

    const getbussinesswithId= ()=>{
        GlobalApi.getBussinessByID(params?.bussinessId)  
        .then(resp=>setBussiness(resp.bussinessList))      
    }
    useEffect(()=>{
        params && getbussinesswithId()
    },[params])

    const checkUserAuth=()=>{
        if(status=='loading')
        {
            return <p>Loading...</p>
        }
    
        if(status=='unauthenticated')
        {
            signIn('descope');
        }
    
      }

      useEffect(()=>{
        checkUserAuth();
      },[]);

    return  status=='authenticated'&&bussiness&&(
        <div className='py-8 md:py-20 px-10 md:px-36'>
            <BussinessInfo bussiness={bussiness}/>
           <div className='grid grid-cols-3 mt-16'>
               <div className="col-span-4 md:col-span-2 order-last md:order-first">
                    <BussinessDescription bussiness={bussiness}/>
               </div>
               <div className=''>
                    <SuggestedBussiness bussiness={bussiness}/>
               </div>
           </div>
        </div>
    );
};

export default BussinessDetails;