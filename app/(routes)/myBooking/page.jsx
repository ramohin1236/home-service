"use client"
import React, { useEffect,useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingHistory from './_component/BookingHistory';
import GlobalApi from '@/app/_components/_services/GlobalApi';
import { useSession } from 'next-auth/react';

const MyBooking = () => {

    const [bookingHistoryy, setBookingHistory]=useState([])
console.log(bookingHistoryy);
    const {data}=useSession()
  
    useEffect(()=>{
        data&&getUserBookingHistory()
    },[data])

    const getUserBookingHistory=()=>{
        GlobalApi.getUserBooking(data?.user?.email)
        .then(resp=>{
            
            setBookingHistory(resp.booking)
        })
    }


    const filterData=(type)=>{
        const result=bookingHistoryy.filter(item=>
            type=='Booked'?
            new Date(item.date)>=new Date()
            :new Date(item.date)<=new Date());

            return result;
    }

    return (
        <div className='my-10 mx-5 md:mx-36'>
            <h2 className="font-bold text-[20px] my-4">My Bookings</h2>
            <Tabs defaultValue="account" className="w-full">
                <TabsList className='w-full  justify-start gap-3 '>
                    <TabsTrigger
                 
                    value="Booked">Booked</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent  value="Booked">
                    <BookingHistory bookingHistoryy={filterData('Booked')}/>
                </TabsContent>


                <TabsContent value="completed">
                <BookingHistory bookingHistoryy={filterData('Completed')}/>
                </TabsContent>
            </Tabs>

        </div>
    );
};

export default MyBooking;