"use client"
import Link from "next/link";
import GlobalApi from "@/app/_components/_services/GlobalApi";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CategorySidebar = () => {
    
    const [categoryList, setCategoryList]=useState([])
    const [categoryName, setCategoryName]=useState()
    const params=usePathname()
    
    //  for category List
        useEffect(()=>{
         
            getCategorList()
           
        },[])
        useEffect(()=>{
           params && setCategoryName(params.split("/")[2])
           
        },[params])
        const getCategorList =()=>{
            GlobalApi.getCategory().then(resp=>{
                setCategoryList(resp.categori)
        
            })
        }
    return (
        <div className="">
            <p className="font-bold  text-lg text-primary mb-6">CategorySidebar</p>
            <div>
                {
                    categoryList.map((cate,idx)=>(
            <Link href={`/search/${cate.name}`} key={idx} 
            className={`flex border
                 items-center
         gap-4 p-3 rounded-md mb-3 
         md:mr-10 cursor-pointer
           hover:bg-purple-100
              hover:text-primary 
               hover:border-primary
               ${categoryName == cate.name && "border-primary bg-purple-100 shadow-md"}
                        `}>
                            <Image src={cate.icon.url}
                            width={30}
                            height={30}
                            alt="icon"/>
                           <h2>{cate.name}</h2>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default CategorySidebar;