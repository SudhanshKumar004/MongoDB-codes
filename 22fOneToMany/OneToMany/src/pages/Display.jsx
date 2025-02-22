import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Display = () => {
  const [alldata, setAllData] = useState([])

  
  const loadData =async () =>{
     let api = "http://localhost:8080/user/displayall"
        try {
            let response = await axios.get(api);
            setAllData(response.data);
            
        } catch (error) {
            console.log(error);
            
        } 
  }

  const ans = alldata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.authorName}</td>
        <td>{key.email}</td>
        <td>{key.city}</td>
        {key.bookid.map((items)=>{
          return(
            <>
            <tr>
              <td>book name:{items.bookname}</td>
              <td>book price:{items.price}</td>
            </tr>
            </>
          )
        })}
      </tr>
      </>
    )
  })

  useEffect(()=>{
    loadData();
  },[])
  return (
    <>
      <h1>Display</h1>
      <table width={500} border={1}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Book</th>
        </tr>
        {ans}
      </table>
    </>
  )
}

export default Display
