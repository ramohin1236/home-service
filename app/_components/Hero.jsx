import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";

const Hero = () => {
   
    return (
        <div className="flex items-center flex-col justify-center pt-14 pb-7 ">
            <p className="font-bold text-5xl text-center leading-snug">Find Home <span className="text-primary">Service & Repair</span><br /> For You</p>
            <p className="text-xl text-gray-500 mt-2">Explore Best Home Service & Repair Near You</p>

             <div className="mt-8 flex gap-4">
             <Input  placeholder='Search Your Service...' className="p-6 rounded-full md:w-[350px]"/>
               <Button
               className="rounded-md h-[45px] "
               >  
               <Search 
               className="h-4 w-8 "
               />
               </Button>
             </div>
        </div>
    );
};

export default Hero;