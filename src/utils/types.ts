export interface  products{
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:{
    rate:number,
    count:number
  }
}

export interface orders{
    id:number,
    productId:number,
    quantity:number
}

export interface cart{
    id:number,
  title:string,
  image:string,
  productId:number,
  quantity:number
}

export interface login{
    email:string,
    password:string
}

