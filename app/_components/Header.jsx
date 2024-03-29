import { Button } from "@/components/ui/button";
import { Butterfly_Kids } from "next/font/google";
import Image from "next/image";

const Header = () => {
   
    return (
        <div className="p-5 shadow-sm flex justify-between items-center ">
       <div className="flex items-center gap-10">
           <Image src='/logo.svg' alt='logo' width={100} height={100}/>
         {/* nav itmes */}
           <div className="md:flex items-center gap-6 hidden">
                <h2 className="text-xl text-purple-600 hover:scale-105 hover:text-primary hover:font-bold font-semibold hover:cursor-pointer">Home</h2>
                <h2 className="text-xl text-purple-600 hover:scale-105 hover:text-primary hover:font-bold font-semibold hover:cursor-pointer">Services</h2>
                <h2 className="text-xl text-purple-600 hover:scale-105 hover:text-primary hover:font-bold font-semibold hover:cursor-pointer">About Us</h2>
           </div>
           
        </div>
        {/* open icons for mobile device */}
        <div>
               <Button>Get Started</Button>
           </div>
        </div>
    );
};

export default Header;