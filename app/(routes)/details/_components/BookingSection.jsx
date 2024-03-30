import React, { useState } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Calendar } from "@/components/ui/calendar"
const BookingSection = ({children}) => {

    const [date,setDate]=useState(new Date())
    const [timeSlot,setTimeSlot]=useState([]);


    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }
  
        setTimeSlot(timeList)
      }



    return (
        <div>
           
           <Sheet>
         
  <SheetTrigger asChild>{children}</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="text-2xl font-bold text-primary">Book on Service!</SheetTitle>
      <SheetDescription className="">
        <p className='mt-6 mb-2 text-xl'> Select Date and Time slot </p>
         {/* Datte Picker */}
         <div className='flex flex-col gap-5 items-baseline'>
            <h2 className='text-2xl font-bold mt-4'>Select Date</h2>
                  <Calendar
                     mode="single"
                       selected={date}
                       onSelect={setDate}
                       className="rounded-md border"
                   />
         </div>
{/* time slot picker */}
         <div>

         </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        </div>
    );
};

export default BookingSection;