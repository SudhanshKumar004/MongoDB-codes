import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const AddNewBook = () => {
  const [bookname,setBookname] = useState("")
  const [price,setPrice] = useState("")
  const {id} = useParams()

  const handleSubmit=async()=>{
    let api = "http://localhost:8080/user/addbook"
        try {
            let response = await axios.post(api,{id:id,bookname:bookname,price:price});
            alert(response.data);
            
        } catch (error) {
            console.log(error);
            
        } 
  }
  return (
    <>
      <h1>Add Book</h1>
      Enter Book Name : <input type="text" value={bookname} onChange={(e)=>{setBookname(e.target.value)}} /> <br />
      Enter Book Price : <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} /> <br />
      <button onClick={handleSubmit}>Add Book</button>
    </>
  )
}

export default AddNewBook
