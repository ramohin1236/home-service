import { Button } from "@/components/ui/button";
import Image from "next/image";

const BussinessList = ({bussinessList,title}) => {
    console.log(bussinessList)
    return (
        <div className="mt-5">
            <p className="font-bold text-[22px]">{title}</p>
        
            <div className="grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 mb-12">
                {
                   bussinessList.length >0?  bussinessList.map((bussiness,idx)=>(<div key={bussiness.id}
                    className="cursor-pointer shadow-md rounded-lg hover:shadow-lg hover:shadow-primary hover:scale-105 transition-all ease-in-out"
                    >
                         <Image src={bussiness?.images[0]?.url} alt='image'
                         width={500}
                         height={200}
                         className="h-[150px] md:h-[300px] 
                         md:w-full
                         object-cover rounded-lg"
                         />
                      <div className="flex flex-col items-baseline p-3">
                      <p className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">{bussiness.categori[0]?.name}</p>
                      <p className="font-bold text-2xl">{bussiness.name}</p>
                      <p className="font-semibold text-gray-700">{bussiness.contactPerson}</p>
                      <p className="font-semibold text-gray-700">{bussiness.address}</p>
                      <div className="mt-3 ">
                      <Button className="rounded-lg">Book Now</Button>
                      </div>
                      </div>
                    </div>
                    
                    )):[1,2,3,4,5,6,7].map((item,idx)=>(
                        <div key={idx}
                        className="w-full h-[300px]
                        bg-slate-200 rounded-xl
                       animate-pulse
                        "
                        >

                        
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BussinessList;