
import { Button, Flex, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import React, {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../Redux/app/app.action'
import { useAppSelector } from '../Redux/store'

const EditProduct = () => {
  const {productId}=useParams()
  const product=useAppSelector((store)=>store.AppReducer.data)
  const [title,setTitle]=useState("")
  const [price,setPrice]=useState(0)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(product.length===0){
      dispatch(getProduct())
    }
  },[dispatch,product.length])
  useEffect(()=>{
    if(productId){
      const currentProduct=product.find(item=>item.id===Number(productId))
      currentProduct && setTitle(currentProduct.title)
      currentProduct && setPrice(currentProduct.price)
    }
  },[productId,product])
  return (
    <div>
      <Flex  m={5} justifyContent={"center"} >
     <Stack spacing={4}>
            <FormControl id="title">
              <FormLabel>Title</FormLabel>
              <Input value={title} onChange={(e)=>e.target.value} type="email" />
            </FormControl>
            <FormControl id="price">
              <FormLabel>Price</FormLabel>
              <Input value={price} onChange={(e)=>e.target.value}  type="number" />
            </FormControl>
           
              <Button
             
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Flex>
    </div>
  )
}

export default EditProduct
