import axios from "axios"
import { useEffect, useState } from "react"

const Fetch = () => {
  const [data, setData] = useState([])
  const API="https://fakestoreapi.com/users"

  const getUserdata= async ()=>{
    try {
      
      const res=await axios.get(API)
      setData(res.data.username)
      console.log(res);
      
    } 
    catch (error) {
      console.log(error)
    }

  }


  useEffect(()=>{
    getUserdata()
  },[])
  return (
    <div>
      {
        data.map((item,i)=>{
          return(
            <p key={i}>
            <li>{item.email}</li>
          </p>
          )
        })
      }
    </div>
  )
}

export default Fetch