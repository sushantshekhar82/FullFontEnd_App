import React, { useEffect, useState } from 'react'
import { getProduct } from '../Redux/app/app.action'
import { useAppDispatch, useAppSelector } from '../Redux/store'
import ProductCard from '../components/ProductCard'
import { Flex } from '@chakra-ui/react'
import { wrap } from 'module'
const HomePage = () => {
  const dispatch=useAppDispatch()
  const {data}=useAppSelector((store)=>store.AppReducer)

  useEffect(()=>{
    
   dispatch(getProduct())
  },[])
    console.log(data)    
  return (
    <div>
      
        <Flex flexWrap={'wrap'} justifyContent={'center'}>{
           data.length>0 && data.map((item)=>(
          <ProductCard key={item.id} {...item}/>
        )) }
        </Flex>
       
     
  
    </div>
  )
}

export default HomePage
