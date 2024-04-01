import { MapPin, User,Calendar } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const BookingHistory = ({ bookingHistoryy }) => {
    console.log("bookingHistory", bookingHistoryy);

    // Check if bookingHistoryy is an array before using .map()
    if (!Array.isArray(bookingHistoryy)) {
        // If bookingHistoryy is not an array, return a message or handle it accordingly
        return <div>No booking history available</div>;
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {
                bookingHistoryy.map((item, idx) => (
                   
                    <div key={idx} className="flex gap-4 items-center mb-8 border rounded-xl p-2">
                      { item?.busines?.name&&
                         <Image
                         src={item?.busines?.images[0].url}
                         width={120}
                         height={120}
                         alt="image"
                         className="rounded-lg"
                         />
                        
                      }
                     <div className="flex flex-col gap-1">
                     <p className='font-bold'> {item?.busines?.name}</p>
                      <p className="flex gap-2 text-primary"><User/> {item?.busines?.contactPerson}</p>
                      <p className="flex gap-2 text-gray-600"><MapPin/> {item?.busines?.address}</p>
                     <p className="flex gap-2 text-gray-600"> <Calendar/> Service Date:  <span className="font-bold ">{item?.date}</span></p>
                     <p className="flex gap-2 text-gray-600"> <Calendar/> Service Time:  <span className="font-bold ">{item?.time}</span></p>
                     </div>
                    </div>
                ))
            }
        </div>
    );
};

export default BookingHistory;