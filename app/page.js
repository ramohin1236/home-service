"use client"
import { useEffect, useState } from "react";
import CategoryList from "./_components/CategoryList";
import BussinessList from "./_components/BussinessList";
import Hero from "./_components/Hero";
import GlobalApi from "./_components/_services/GlobalApi";


export default function Home() {
    const [categoryList, setCategoryList]=useState([])
    const [bussinessList, setBussinessList]=useState([])
//  for category List
    useEffect(()=>{
        getCategorList()
        getAllBussinessListt()
    },[])
    const getCategorList =()=>{
        GlobalApi.getCategory().then(resp=>{
            setCategoryList(resp.categori)
            // console.log(resp.categori);
        })
    }
    
    // for All bussiness List

    const getAllBussinessListt=()=>{
        GlobalApi.getAllBussinessList()
        .then((resp)=>{
            setBussinessList(resp.bussinessLists)
            
        })
    }

  return (
    <div>
       <Hero/>

       <CategoryList categoryList={categoryList}/>

       <BussinessList bussinessList={bussinessList}
       title="Popular Bussinenss"
       />
    </div>
  );
}
