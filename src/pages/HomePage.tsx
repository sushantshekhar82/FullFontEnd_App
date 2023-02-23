import React, { useEffect, useState } from 'react'
import { getProduct } from '../Redux/app/app.action'
import { useAppDispatch, useAppSelector } from '../Redux/store'
import ProductCard from '../components/ProductCard'
import { Flex , Box} from '@chakra-ui/react'
import { wrap } from 'module'
import FilterandSort from '../components/FilterandSort'
import { useLocation, useSearchParams } from 'react-router-dom'
const HomePage = () => {
  const dispatch=useAppDispatch()
  const {data}=useAppSelector((store)=>store.AppReducer)
const [searchParams]=useSearchParams()
console.log(searchParams)
const location=useLocation()
console.log("location",location)
  useEffect(()=>{
    if(data.length===0 || location){
      const getProductParam={
        params:{
          category:searchParams.getAll('filter'),
          sort:searchParams.getAll('sort'),
          order:searchParams.getAll('order')
          
          
        }
      }
      dispatch(getProduct(getProductParam))
    }
  
  },[location.search])
    //console.log(data)    
  return (
    <div>
      <Flex>
        <Box>
          <FilterandSort/>
        </Box>
        <Flex flexWrap={'wrap'} justifyContent={'center'}>{
           data.length>0 && data.map((item)=>(
          <ProductCard key={item.id} {...item}/>
        )) }
        </Flex>
       
        </Flex>
  
    </div>
  )
}

export default HomePage
