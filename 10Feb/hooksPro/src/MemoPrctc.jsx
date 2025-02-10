import React, { useMemo, useState } from 'react'

const MemoPrctc = () => {

    const[num,setNum] = useState(0)
    const[city,setCity] = useState("")

    const MyMulti = useMemo(myMulti, [num])

    function myMulti(){
        for(let i=0;i<=20000000;i++){}
        return num*2;
    }

  return (
    <>
      Enter Number : <input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}} /> <br />
      Enter City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} /> <br />
      <h1>Multi : {MyMulti} </h1>
    </>
  )
}

export default MemoPrctc
