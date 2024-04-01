"use client"
import { Button } from "@/components/ui/button";
import { signIn,signOut, useSession } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const Header = () => {
    const {data}=useSession();

    useEffect(()=>{
        console.log(data);
      },[data])
  
    return (
        <div className="p-5 shadow-sm flex justify-between items-center ">
       <div className="flex items-center gap-10">
           <Image src='/logo.svg' alt='logo' width={100} height={100}/>
         {/* nav itmes */}
           <div className="md:flex items-center gap-6 hidden">
           <Link
                href={'/'}
                ><h2 className="text-xl text-purple-600 hover:scale-105 hover:text-primary hover:font-bold font-semibold hover:cursor-pointer">Home</h2></Link>
                <h2 className="text-xl text-purple-600 hover:scale-105 hover:text-primary hover:font-bold font-semibold hover:cursor-pointer">Services</h2>
                <Link
                href={'/myBooking'}
                ><h2 className="text-xl text-purple-600 hover:scale-105 hover:text-primary hover:font-bold font-semibold hover:cursor-pointer">My Booking</h2></Link>
           </div>
           
        </div>
        {/* open icons for mobile device */}
        <div>
          {data?.user?
          
          <DropdownMenu>
  <DropdownMenuTrigger asChild>
  <Image src={data?.user?.image}
          alt='user'
          width={40}
          height={40}
          className='rounded-full'
          />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
     <Link href={'/mybooking'}>My Booking</Link> 
      </DropdownMenuItem>
    <DropdownMenuItem onClick={()=>signOut()}>Logout</DropdownMenuItem>
   
  </DropdownMenuContent>
</DropdownMenu>

          :  

          <Button onClick={()=>signIn('descope')}>Login / Sign Up</Button>

        }
            </div>
        </div>
    );
};

export default Header;