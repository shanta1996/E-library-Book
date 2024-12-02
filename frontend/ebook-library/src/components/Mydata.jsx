import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Mydata = () => {
    const [first, setfirst] = useState([])
    useEffect(()=>{
      const fetching=async ()=>{
        const {data}=await axios.get("https://fakestoreapi.com/products")
        
        setfirst(data)
  
      }
      fetching()
    },[])
  return (
    <div>
        <h1>
  {
    first.map((item)=>(
      <p>{item.title}</p>
    ))
  }
</h1>
    </div>
  )
}

export default Mydata