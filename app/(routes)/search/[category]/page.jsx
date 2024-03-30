"use client"


import BussinessList from "@/app/_components/BussinessList";
import GlobalApi from "@/app/_components/_services/GlobalApi";
import { useEffect, useState } from "react";

const BussinessByCategory = ({params}) => {
  const [bussinessList,setBussinessList]=useState([])
  
    useEffect(()=>{
    params && getBussinessList()
   },[params])


   const getBussinessList=()=>{
     GlobalApi.getBussinessCategory(params.category)
     .then((resp)=>{
        setBussinessList(resp.bussinessLists);
     })
   }

    return (
        <div className="">
           <BussinessList 
           title={params.category}
           bussinessList={bussinessList}
           />
        </div>
    );
};

export default BussinessByCategory;