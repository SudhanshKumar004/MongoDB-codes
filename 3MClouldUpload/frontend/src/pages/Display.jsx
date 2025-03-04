import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Display = () => {
    const [mydata, setMydata] = useState([])

    const loadData = async () =>{
        let api = "http://localhost:8080/user/displaydata";
        let response = await axios.get(api);
        setMydata(response.data)
        console.log(response.data);
    }


    const ans = mydata.map((key)=>{
        return(
            <>
            <tr>
                <td><img src={key.imgurl} style={{width:"100px", height:"100px"}}/></td>
                <td>{key.name}</td>
                <td>{key.age}</td>
                <td>{key.city}</td>
            </tr>
            </>
        )
    })
    useEffect(()=>{
        loadData();
    },[])
  return (
    <>
     <h1>Data Display</h1>
    <table>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
        {ans}
    </table>

    </>
  )
}

export default Display
