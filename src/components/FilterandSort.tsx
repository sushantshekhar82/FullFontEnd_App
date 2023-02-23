import React, {useState,useEffect} from 'react'
import { Checkbox, CheckboxGroup, Stack,Heading } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
const FilterandSort = () => {
    const[searchParams,setSearchParam]=useSearchParams()
    
    const initialValues=searchParams.getAll('filter');
    const initialValues1=searchParams.getAll('sort');
    //const intitialValues1=searchParams.getAll('filter')
    //console.log("he",initialValues,intitialValues1)
    const[filterValues,setFilterValues]=useState<string[]>(initialValues||[])
    const[sortValues,setSortValues]=useState<string[]>(initialValues1||[])
    const[str,setStr]=useState<string>("price")
    
  const handleFilterChange=(value:string[])=>{
    setFilterValues(value)
  }
  const handleSort=(value:any)=>{
    setSortValues(value)
  }
  useEffect(()=>{
    let params:{filter?:string[],sort?:string,order?:string[]}={}
    if(filterValues.length||sortValues.length)
    params.filter=filterValues;
    params.sort=str
    params.order=sortValues
//params.filter=sortValues;
    console.log(params)
    
    setSearchParam(params)
  },[filterValues,searchParams,sortValues])
  
  //console.log(searchParams)
 
    return (
    <div style={{marginLeft:"10px"}}>
        <Heading size={'lg'} marginBottom={"5px"}>Filter</Heading>
     
        <CheckboxGroup colorScheme={'green'}
         value={filterValues} 
         onChange={handleFilterChange}>
        <Stack spacing={[1,5]} direction={'column'}>
  <Checkbox value={'bags'} colorScheme='green' >
    Bags
  </Checkbox>
  <Checkbox value={'electronics'} colorScheme='green' >
    Electronics
  </Checkbox>
  <Checkbox value={'jewelery'} colorScheme='green' >
   Jewelery
  </Checkbox>
  <Checkbox value={"men's clothing"} colorScheme='green' >
   Mens clothing
  </Checkbox>
  <Checkbox value={"women's clothing"} colorScheme='green' >
   Womens clothing
  </Checkbox>
  </Stack>
  </CheckboxGroup>

<Heading>Sort</Heading>
<RadioGroup defaultValue='2'  onChange={handleSort}>
  <Stack spacing={5} direction={'column'}>
    <Radio colorScheme='green' value='asc'>
     Low to High
    </Radio>
    <Radio colorScheme='green' value='desc'>
     High to Low
    </Radio>
  </Stack>
</RadioGroup>
    </div>
  )
}

export default FilterandSort
