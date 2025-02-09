import axios from 'axios'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Search = () => {
  const [search , setSearch] = useState("")
  const [mydata , setData] = useState([])

  const handleSubmit=()=>{
    let api = "http://localhost:8000/library/searchdata"
    axios.post(api , {bookid:search}).then((res)=>{
      setData(res.data)
      console.log(res.data);
      
    })
  }

  const ans = mydata.map((key)=>{
    return(
      <>
      <Card className="text-center">
      <Card.Header>Info</Card.Header>
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          Book Name : {key.bkname}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{key.rate}/- Rs</Card.Footer>
    </Card>
      </>
    )
  })
  return (
    <>
      <h1>Search Details</h1>
      <div className="swrap">
      <h1>Enter ID : <input type="text" name="id" value={search} onChange={(e)=>{setSearch(e.target.value)}} /></h1>
      <button onClick={handleSubmit}>Search</button>

      <hr />
    {ans}
    </div>
    </>
  )
}

export default Search
